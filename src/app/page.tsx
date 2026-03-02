import {
  BalanceScale,
  BoltIcon,
  BriefcaseIcon,
  ClockIcon,
  FileContractIcon,
  GravelIcon,
  HandShakeIcon,
  HouseUser,
  LockIcon,
  ScaleIcon,
  ServiceShield,
  SheildIcon,
  UserShieldIcon,
} from "@/public/images/icons";
import Image from "next/image";
import { Images } from "./images";
import BlogCard from "./components/cards/BlogCard";
import NewsletterSection from "./components/cards/NewsletterSection";

const services = [
  {
    id: 1,
    title: "Civil Litigation",
    icon: <GravelIcon />,
  },
  {
    id: 2,
    title: "Criminal Defence & Prosecution Support",
    icon: <UserShieldIcon />,
  },
  {
    id: 3,
    title: "Family Law & Guardianship",
    icon: <HouseUser />,
  },
  {
    id: 4,
    title: "Competition & Consumer Protection",
    icon: <BalanceScale />,
  },
  {
    id: 5,
    title: "Cyber Law & Digital Evidence",
    icon: <ServiceShield />,
  },
  {
    id: 6,
    title: "Labour & Employment / NIRC",
    icon: <BriefcaseIcon />,
  },
  {
    id: 7,
    title: "Alternative Dispute Resolution (ADR)",
    icon: <HandShakeIcon />,
  },
  {
    id: 8,
    title: "Drafting & Advisory",
    icon: <FileContractIcon />,
  },
];

export default function Home() {
  return (
    <>
      <div className="bg-[url('/images/heroBanner.png')] relative z-10 bg-center bg-cover bg-no-repeat w-full h-[90dvh] rounded-b-3xl shadow mb-4">
        <div className=" w-full h-full space-y-8 md:space-y-16 flex flex-col max-w-7xl container mx-auto justify-center items-start text-center px-4">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-white font-semibold text-3xl md:text-7xl">
              Trust is Just the Beginning
            </h1>

            <div
              className="flex items-center md:justify-start justify-center
             gap-2 md:gap-4 flex-wrap"
            >
              <h2 className="text-lg md:text-3xl text-white">Litigation</h2>
              <span className="h-1.5 md:h-2 md:w-2 w-1.5 rounded-full bg-white shrink-0 block"></span>
              <h2 className="text-lg md:text-3xl text-white">Regulatory</h2>
              <span className="h-1.5 md:h-2 md:w-2 w-1.5 rounded-full bg-white shrink-0 block"></span>
              <h2 className="text-lg md:text-3xl text-white">Cyber</h2>
              <span className="h-1.5 md:h-2 md:w-2 w-1.5 rounded-full bg-white shrink-0 block"></span>
              <h2 className="text-lg md:text-3xl text-white">ADR</h2>
              <span className="h-1.5 md:h-2 md:w-2 w-1.5 rounded-full bg-white shrink-0 block"></span>
              <h2 className="text-lg md:text-3xl text-white">Client-focused</h2>
            </div>
          </div>

          <div className="flex items-center flex-wrap justify-center gap-4">
            <button className="group relative flex cursor-pointer group items-center justify-between px-5 py-2.5 md:px-8 md:py-4 rounded-full bg-white/30 backdrop-blur-xl text-white text-base md:text-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:from-[#b09a85]/95 hover:to-[#876f5f]/95">
              <span>Book Consultation</span>

              <div className="flex items-center ml-5">
                <div className="h-8 w-px bg-white/60 mr-5"></div>
                <span className="group-hover:translate-x-2 duration-500 transition-all">
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.1875 8.28125L10.3125 14.8438C9.92188 15.1953 9.33594 15.1953 8.98438 14.8047C8.63281 14.4141 8.63281 13.8281 9.02344 13.4766L14.2188 8.51562H0.9375C0.390625 8.51562 0 8.125 0 7.57812C0 7.07031 0.390625 6.64062 0.9375 6.64062H14.2188L9.02344 1.71875C8.63281 1.36719 8.63281 0.742188 8.98438 0.390625C9.33594 0 9.96094 0 10.3125 0.351562L17.1875 6.91406C17.3828 7.10938 17.5 7.34375 17.5 7.57812C17.5 7.85156 17.3828 8.08594 17.1875 8.28125Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
            </button>

            <button className="group relative flex cursor-pointer group items-center justify-between px-5 py-2.5 md:px-8 md:py-4 rounded-full bg-white/30 backdrop-blur-xl text-white text-base md:text-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:from-[#b09a85]/95 hover:to-[#876f5f]/95">
              <span>View Practice Areas</span>

              <div className="flex items-center ml-5">
                <div className="h-8 w-px bg-white/60 mr-5"></div>
                <span className="group-hover:translate-x-2 duration-500 transition-all">
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.1875 8.28125L10.3125 14.8438C9.92188 15.1953 9.33594 15.1953 8.98438 14.8047C8.63281 14.4141 8.63281 13.8281 9.02344 13.4766L14.2188 8.51562H0.9375C0.390625 8.51562 0 8.125 0 7.57812C0 7.07031 0.390625 6.64062 0.9375 6.64062H14.2188L9.02344 1.71875C8.63281 1.36719 8.63281 0.742188 8.98438 0.390625C9.33594 0 9.96094 0 10.3125 0.351562L17.1875 6.91406C17.3828 7.10938 17.5 7.34375 17.5 7.57812C17.5 7.85156 17.3828 8.08594 17.1875 8.28125Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
            </button>
          </div>
        </div>
        <div className="bg-white rounded-b-3xl w-full py-3 px-8 text-center absolute bottom-0">
          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-3 max-w-7xl container mx-auto">
            <div className="flex items-center gap-3 justify-center">
              <span className="md:block hidden">
                <ScaleIcon />
              </span>
              <span className="text-lg md:text-2xl text-gray-900 font-semibold">
                Licensed
              </span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <span className="md:block hidden">
                <SheildIcon />
              </span>
              <span className="text-lg md:text-2xl text-gray-900 font-semibold">
                Confidential
              </span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <span className="md:block hidden">
                <BoltIcon />
              </span>
              <span className="text-lg md:text-2xl text-gray-900 font-semibold">
                Quick Response
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        id="parctice-area"
        className="pt-8 md:pt-14 scroll-mt-24 space-y-24 container max-w-7xl px-4 md:px-0 mx-auto"
      >
        <div className="space-y-6">
          <h2 className="font-bold text-black text-3xl md:text-[46px]">
            Our Practice <span className="text-primary">Areas</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="
        rounded-xl px-3 md:px-6 gap-4 md:gap-6 border border-gray-200
        group cursor-pointer py-5 md:py-10 flex items-center justify-start flex-col
        
        hover:border-primary hover:bg-primary
        
        transition-all duration-300 ease-in-out
      "
              >
                <span
                  className="
          md:h-20 h-16 w-16 md:w-20 rounded-full
          bg-primary-light group-hover:bg-white
          flex items-center justify-center
          
          transition-all duration-300 ease-in-out
        "
                >
                  {service.icon}
                </span>

                <h2
                  className="
          font-medium text-xl md:text-2xl text-black
          group-hover:text-white
          
          transition-colors duration-300 text-center ease-in-out
        "
                >
                  {service.title}
                </h2>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="font-bold text-black text-3xl md:text-[46px]">
            How We <span className="text-primary">Help</span>
          </h2>
          <div>
            <div className="w-full  mx-auto border border-gray-200 rounded-xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                {/* Item 1 */}
                <div className="flex flex-col items-center text-center space-y-4 md:pb-0 pb-4">
                  <GravelIcon width="40" height="40" />
                  <p className="text-2xl font-normal text-black leading-snug">
                    Strategic <br /> Courtroom Advocacy
                  </p>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col items-center text-center space-y-4 md:pb-0 pb-4">
                  <ClockIcon />
                  <p className="text-2xl font-normal text-black leading-snug">
                    Clear case <br /> timelines & fees
                  </p>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col items-center text-center space-y-4 md:pb-0 pb-4">
                  <LockIcon />
                  <p className="text-2xl font-normal text-black leading-snug">
                    Confidential <br /> handling
                  </p>
                </div>

                {/* Item 4 */}
                <div className="flex flex-col items-center text-center space-y-4 md:pb-0 pb-4">
                  <HandShakeIcon width="50" height="40" />
                  <p className="text-2xl font-normal text-black leading-snug">
                    Practical <br /> settlement planning
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 items-center">
              <div className="pt-8">
                <Image
                  alt=""
                  className="w-full h-full"
                  src={Images.layout.help}
                />
              </div>
              <div className="w-full max-w-4xl mx-auto px-6 py-8 md:py-16 bg-white">
                <div className="relative">
                  {/* Vertical Dotted Line */}
                  <div className="absolute left-7 md:left-10 top-6 bottom-6 border-l-2 border-dashed border-[#8B4513]/50"></div>

                  {/* Item 1 */}
                  <div className="relative flex gap-8 mb-6">
                    <div className="w-20 flex justify-center">
                      <span className="text-5xl font-bold bg-white h-fit text-transparent stroke-text">
                        01
                      </span>
                    </div>
                    <div>
                      <h3 className="text-3xl font-semibold text-[#2A1305] mb-2">
                        Free Intake
                      </h3>
                      <p className="text-gray-800 leading-relaxed text-base max-w-lg">
                        Submit your case details securely online or via call, so
                        our team can understand your needs and start the process
                        quickly.
                      </p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="relative flex gap-8 mb-6">
                    <div className="w-20 flex justify-center">
                      <span className="text-5xl font-bold bg-white h-fit text-transparent stroke-text">
                        02
                      </span>
                    </div>
                    <div>
                      <h3 className="text-3xl font-semibold text-[#2A1305] mb-2">
                        Case Assessment
                      </h3>
                      <p className="text-gray-800 leading-relaxed text-base max-w-lg">
                        Our experts carefully review your case, analyze details,
                        and provide an initial strategy tailored to your
                        specific legal requirements.
                      </p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="relative flex gap-8 mb-6">
                    <div className="w-20 flex justify-center">
                      <span className="text-5xl font-bold bg-white h-fit text-transparent stroke-text">
                        03
                      </span>
                    </div>
                    <div>
                      <h3 className="text-3xl font-semibold text-[#2A1305] mb-2">
                        Strategy & Filing
                      </h3>
                      <p className="text-gray-800 leading-relaxed text-base max-w-lg">
                        We prepare all necessary documents, plan your approach
                        strategically, and file your case efficiently with full
                        professional guidance.
                      </p>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="relative flex gap-8 ">
                    <div className="w-20 flex justify-center">
                      <span className="text-5xl font-bold bg-white h-fit text-transparent stroke-text">
                        04
                      </span>
                    </div>
                    <div>
                      <h3 className="text-3xl font-semibold text-[#2A1305] mb-2">
                        Hearings / Settlement
                      </h3>
                      <p className="text-gray-800 leading-relaxed text-base max-w-lg">
                        Attend hearings or negotiate settlements confidently
                        while our team ensures you receive timely, practical,
                        and expert legal support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-7xl px-4 md:px-0 mx-auto space-y-4 md:space-y-8">
        <div className="flex flex-wrap items-center gap-2 md:gap-4 justify-between">
          <h2 className="font-bold text-black text-2xl md:text-[46px]">
            Legal Updates & <span className="text-primary">Articles</span>
          </h2>

          <div className="flex items-center gap-3">
            <button className="text-primary font-semibold text-lg">
              View All Articles
            </button>
            <button className="rounded-full hidden  bg-primary hover:bg-primary-dark px-8 p-3 group text-white font-semibold text-base xl:flex items-center gap-3">
              Submit a Paper
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BlogCard
            imageSrc="/images/blogs/b1.png"
            category="Competition Law"
            title="Understanding Corporate Litigation in Pakistan"
            description="A concise guide to corporate litigation processes and common pitfalls in Pakistan..."
            authorName="Ahsan Raza"
            authorAvatarSrc="/images/blogs/b1.png"
            date="Feb 15, 2026"
            href="/blog/understanding-corporate-litigation"
          />
          <BlogCard
            imageSrc="/images/blogs/b1.png"
            category="Competition Law"
            title="Understanding Corporate Litigation in Pakistan"
            description="A concise guide to corporate litigation processes and common pitfalls in Pakistan..."
            authorName="Ahsan Raza"
            authorAvatarSrc="/images/blogs/b1.png"
            date="Feb 15, 2026"
            href="/blog/understanding-corporate-litigation"
          />
          <BlogCard
            imageSrc="/images/blogs/b1.png"
            category="Competition Law"
            title="Understanding Corporate Litigation in Pakistan"
            description="A concise guide to corporate litigation processes and common pitfalls in Pakistan..."
            authorName="Ahsan Raza"
            authorAvatarSrc="/images/blogs/b1.png"
            date="Feb 15, 2026"
            href="/blog/understanding-corporate-litigation"
          />
        </div>
      </div>

      <div className="container mx-auto py-12">
        <NewsletterSection />
      </div>
    </>
  );
}
