import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { RiAliensLine } from "react-icons/ri";
import { GiHumanPyramid, GiDeadHead, GiLifeBar } from "react-icons/gi";
import Statistics from "./Statistics";
export default function Card({ personajes }) {
  return (
    <div className="">
      <h1 className="text-red-500  text-center	 ">
        {personajes.name}
        <div className="card p-[15px]  relative flex-wrap  preserve-3d hover:my-rotate-y-180  duration-1000 backface-hidde  h-full w-full cursor-pointer	">
          <div className="backface-hidden preserve-3d ">
            <div className="flip-card-front  bg-no-repeat	bg-cover	bg-center absolute ">
              <img
                className="rounded-lg w-[300px] h-[300px]"
                src={personajes.image}
                alt={personajes.name}
              />
            </div>

            <div className="flip-card-back justify-center text-center	 flex-wrap backface-hidden my-rotate-y-180 	bg-[#212F3D]	 p-[30px]   rounded-lg  h-full	 w-full	">
              <div className="container details	 place-items-center 	text-[#FDFEFE] text-base">
                <div className="flex">
                  <strong>Gender:</strong>
                  <p className="pl-[125px]">
                    {personajes.gender === "Male" ? (
                      <BsGenderMale className="lg:text-[22px] md:text-[20px] sm:text-[10px] text-right " />
                    ) : (
                      <BsGenderFemale className="lg:text-[22px] md:text-[20px] sm:text-[10px] text-right	" />
                    )}
                  </p>
                </div>
                <br />
                <div className="flex">
                  <strong>Species:</strong>
                  <p className="pl-[125px]">
                    {personajes.species === "Alien" ? (
                      <RiAliensLine className="lg:text-[22px] md:text-[20px] sm:text-[10px] text-right	" />
                    ) : (
                      <GiHumanPyramid className="lg:text-[22px] md:text-[20px] sm:text-[10px] text-right	" />
                    )}
                  </p>
                </div>
                <br />
                <div className="flex ">
                  <strong>Status:</strong>
                  <p className="pl-[125px]">
                    {personajes.status === "Alive" ? (
                      <GiLifeBar className="xl:text-[18px] lg:text-[22px] md:text-[20px] sm:text-[10px] text-right	 " />
                    ) : (
                      <GiDeadHead className="xl:text-[18px] lg:text-[22px] md:text-[20px] sm:text-[10px] text-right	" />
                    )}
                  </p>
                </div>
                <br />
                <p className="">
                  <Statistics personajes={personajes} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </h1>
    </div>
  );
}
