import Image from "next/image";

function Cards() {
  return (
    <div>
      <div className="flex justify-center gap-5 mt-10">
        <Image
          className="rounded-lg"
          src={"/imageWebsite.jpg"}
          alt="image"
          width={"375"}
          height={"350"}
        />

        <Image
          className="rounded-lg"
          src={"/imageWebsite2.jpg"}
          alt="image"
          width={"375"}
          height={"350"}
        />

        <Image
          className="rounded-lg"
          src={"/imageWebsite3.jpg"}
          alt="image"
          width={"375"}
          height={"350"}
        />
      </div>

      <div className="flex justify-center gap-5 mt-10 mb-10">
        <Image
          className="rounded-lg"
          src={"/slideShow1.jpg"}
          alt="image"
          width={"567"}
          height={"700"}
        />

        <Image
          className="rounded-lg"
          src={"/slideShow2.jpg"}
          alt="image"
          width={"567"}
          height={"700"}
        />
      </div>
    </div>
  );
}

export default Cards;
