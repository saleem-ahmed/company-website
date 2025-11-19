import Image from "next/image";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, description }) => {
  return (
    <div className="group bg-white rounded-lg p-6 sm:p-7 md:p-8 shadow-sm hover:shadow-lg hover:border-blue-100 border border-transparent transition-all duration-300 h-full flex flex-col">
      <div className="mb-4 flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain group-hover:scale-110 transition-transform duration-300 w-[90px] h-[70px]"
        />
      </div>

      <h3 className="text-base sm:text-lg font-bold text-[#937C39] mb-2 sm:mb-3 leading-tight">
        {title}
      </h3>

      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed flex-grow">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
