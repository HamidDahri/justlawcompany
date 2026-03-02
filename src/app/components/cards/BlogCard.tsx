import Image from "next/image";

type BlogCardProps = {
  imageSrc: string;
  category: string;
  title: string;
  description: string;
  authorName: string;
  authorAvatarSrc: string;
  date: string;
  href?: string;
};

export default function BlogCard({
  imageSrc,
  category,
  title,
  description,
  authorName,
  authorAvatarSrc,
  date,
  href = "#",
}: BlogCardProps) {
  return (
    <a
      href={href}
      className="group block rounded-2xl space-y-4 bg-white overflow-hidden  transition"
    >
      {/* Image */}
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover  rounded-2xl "
          sizes="320px"
          priority={false}
        />
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div className="space-y-2">
          {/* Category */}
          <p className="text-sm font-medium text-primary">{category}</p>

          {/* Title row + arrow */}
          <div className="mt-2 flex items-start justify-between gap-4">
            <h3 className="text-2xl font-semibold line-clamp-2 leading-snug text-black">
              {title}
            </h3>

            <span className="mt-1 inline-flex group-hover:rotate-45 duration-500">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.3125 6.25C17.8203 6.25 18.25 6.67969 18.25 7.1875V16.5625C18.25 17.1094 17.8203 17.5 17.3125 17.5C16.7656 17.5 16.375 17.1094 16.375 16.5625V9.45312L7.35156 18.4766C6.96094 18.8672 6.375 18.8672 6.02344 18.4766C5.63281 18.125 5.63281 17.5391 6.02344 17.1875L15.0469 8.16406H7.9375C7.39062 8.16406 7 7.73438 7 7.22656C7 6.67969 7.39062 6.28906 7.9375 6.28906H17.3125V6.25Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>

          {/* Description */}
          <p className=" text-base text-gray-600 line-clamp-3">{description}</p>
        </div>

        {/* Author */}
        <div className="mt-4 flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-black/10">
            <Image
              src={authorAvatarSrc}
              alt={authorName}
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>

          <div className="leading-tight">
            <p className="text-sm font-semibold text-black">{authorName}</p>
            <p className="text-sm text-gray-600">{date}</p>
          </div>
        </div>
      </div>
    </a>
  );
}
