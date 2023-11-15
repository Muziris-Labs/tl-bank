import Image from "next/image";

const RoleItem = ({ heading, paragraph, src, alt }) => {
  return (
    <div className="prevent-select flex items-center gap-10">
      <div className="space-y-2">
        <h4 className="font-bold text-white">{heading}</h4>

        <p className="font-thin text-white">{paragraph}</p>
      </div>

      <div>
        <Image
          src={`/images/tlbank/roles/${src}.svg`}
          width={80}
          height={80}
          alt={alt}
        />
      </div>
    </div>
  );
};

export default RoleItem;
