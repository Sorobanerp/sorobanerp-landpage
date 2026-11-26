import { Team } from "@/types/team";
import Image from "next/image";

const SingleTeam = ({ team }: { team: Team }) => {
  const { name, image, content } = team;

  return (
    <div className="w-full">
      <div className="rounded-[24px] border border-[#E6ECE2] bg-white p-8 shadow-pulse">
        <div className="flex items-center gap-4">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl">
            <Image src={image} alt={name} fill sizes="80px" className="object-cover" />
          </div>
          <div>
            <h5 className="text-lg font-bold text-[#141D14]">{name}</h5>
          </div>
        </div>
        <p className="mt-5 text-base font-medium leading-relaxed text-[#4D5E4D]">{content}</p>
      </div>
    </div>
  );
};

export default SingleTeam;
