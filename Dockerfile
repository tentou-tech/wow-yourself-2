# syntax=docker/dockerfile:1.7

# -------------------------
# Builder
# -------------------------
FROM node:23-alpine AS builder
WORKDIR /app

# Enable pnpm
RUN corepack enable

# Copy only dependency files first (better cache)
COPY package.json pnpm-lock.yaml ./

RUN --mount=type=cache,id=pnpm-store,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile

# Copy source
COPY . .

# Build Next.js standalone
RUN pnpm build

# -------------------------
# Runner (ultra slim)
# -------------------------
FROM node:23-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Standalone output already contains minimal node_modules
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Optional: drop pnpm/corepack artifacts if any
RUN rm -rf \
    /root/.local/share/pnpm \
    /tmp/*

EXPOSE 3000

CMD ["node", "server.js"]
