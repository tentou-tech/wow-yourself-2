
import Image from "next/image";

const RewardRedemption = () => {
  const rewards = [
    {
      name: "Polo thể thao nam Promax Sideflow",
      points: 250,
      image: "/placeholder.png", // Replace with actual image path
      preOrder: true,
      redeemable: true,
    },
    {
      name: "Polo thể thao nam Promax Sideflow",
      points: 250,
      image: "/placeholder.png", // Replace with actual image path
      preOrder: true,
      redeemable: false,
    },
    {
      name: "Polo thể thao nam Promax Sideflow",
      points: 250,
      image: "/placeholder.png", // Replace with actual image path
      preOrder: true,
      redeemable: false,
    },
    {
      name: "Polo thể thao nam Promax Sideflow",
      points: 250,
      image: "/placeholder.png", // Replace with actual image path
      preOrder: true,
      redeemable: false,
    },
    {
      name: "Polo thể thao nam Promax Sideflow",
      points: 250,
      image: "/placeholder.png", // Replace with actual image path
      preOrder: true,
      redeemable: false,
    },
  ];

  return (
    <div className="bg-[#D73930] text-white p-4 rounded-sm">
      <h2 className="text-3xl font-grenze font-bold mb-2 text-[#F5BC41]">Đổi Điểm Thưởng</h2>
      <p className="text-sm mb-4 text-[#D9D9DE] font-semibold">07/12/2025 - 01/01/2026</p>
      <p className="mb-8 text-[#D9D9DE] font-semibold">
        Point sau vòng Tiên tri có thể dùng để đổi các phần thưởng dưới đây
      </p>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {rewards.map((reward, index) => (
          <div key={index} className="rounded-lg">
            <div className="relative">
              {reward.preOrder && (
                <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded font-semibold">
                  Pre order
                </div>
              )}
              <div className="relative w-full" style={{ paddingTop: "100%" }}>
                <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
                  <span className="text-gray-500 text-4xl">1:1</span>
                </div>
              </div>
            </div>
            <div className="py-4">
              <h3 className="font-semibold text-white">{reward.name}</h3>
              <button
                className={`w-full mt-4 py-2 rounded-sm font-grenze text-xl font-semibold ${
                  reward.redeemable
                    ? "bg-[#F5BC41] text-black"
                    : "bg-[#BCBCBC] text-[#0A0A0B] cursor-not-allowed"
                }`}
                disabled={!reward.redeemable}
              >
                {reward.points} Point
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RewardRedemption;
