export default function PeopleCard({ personajes }) {
  // bg-slate-500  esto tenia en flip back
  // esto de car cursor-pointer hover:-rotate-180 visible
  return (
    <div className="flex ">
      <div className="card p-[15px]  relative flex-wrap  preserve-3d hover:my-rotate-y-180  duration-1000 backface-hidde w-[300px] h-[300px] ">
        <div className="backface-hidden preserve-3d ">
          <div className="flip-card-front  bg-no-repeat	bg-cover	bg-center absolute ">
            <img
              className="rounded-lg w-[300px] h-[300px]"
              src={personajes.image}
              alt={personajes.name}
            />
          </div>
          <div className="flip-card-back flex-wrap backface-hidden my-rotate-y-180 	bg-[#212F3D]	 p-[32px]  h-[300px] ">
            <div className="container details text-center justify-center	 place-items-center text-base	text-[#FDFEFE]">
              <strong>Name:</strong>
              {personajes.name}
              <br />
              <p>
                <strong>Gender:</strong>
                {personajes.gender}
              </p>
              <br />
              <p>
                <strong>Species:</strong>
                {personajes.species}
              </p>
              <br />
              <p>
                <strong>Status:</strong>
                {personajes.status}
              </p>
              <br />
              <p>
                <strong>Location:</strong>
                {personajes.location.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
