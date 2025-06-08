// import Image from "next/image";
// import Link from "next/link";

// export default function HeroSection(){
//     return(
//         <div className="w-full">
//                 <div className=" mt-6 ml-[150px] absolute z-10">
//                   <h1 className="text-xl font-mono font-semibold text-white">JeevanKumar R</h1>
//                 </div>
//                 <div className=" flex justify-end  space-x-8 mt-6 ml-[900px] rounded-b-2xl shadow-2xl pr-[100px] absolute z-10">
//                     <Link className=" text-xl text-white font-mono " href={"/"}> Projects</Link>
//                     <Link className=" text-xl text-white font-mono " href={"/"}> Blog</Link>
//                     <Link className=" text-xl text-white font-mono " href={"/"}> About</Link>
//                     <Link className=" text-xl text-white font-mono " href={"/"}> Contact</Link>
//                 </div>
//                 <div className="bg-white absolute w-full h-[300px] shadow-2xl shadow-gray-950  rounded-b-2xl">
//                         <Image
//                             src="/backgroundimages/mountain.jpg"
//                             alt="BackgroundProfileImage"
//                             width={7093}
//                             height={2821}
//                             className="w-full h-full object-cover object-[100%_50%]  rounded-b-2xl"
//                         />
//                     <div className=" absolute pt-[250px] ml-[80px] shadow-2xl mt-[50px] inset-0 flex justify-center items-center w-[250px] h-[250px] rounded-full ">
//                             <Image 
//                                 src="/backgroundimages/jeevan.jpg"
//                                 width={250}
//                                 height={250}
//                                 alt="ProfilePhoto"
//                                 className="w-full h-full object-cover absolute shadow-2xl shadow-gray-950  border-black border-4 rounded-full "
//                             />
//                     </div>
//                 </div>
//         </div>
//     )
// }

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <div className="relative w-full h-[500px]">
            {/* Background with image */}
            <div className="absolute top-0 left-0 w-full h-[300px] rounded-b-2xl overflow-hidden shadow-2xl">
                <Image
                    src="/backgroundimages/mountain.jpg"
                    alt="Background"
                    fill
                    className="object-cover object-[100%_50%]"
                />
            </div>

            {/* Name at top-left */}
            <div className="absolute top-8 left-26 z-10">
                <h1 className="text-xl font-mono font-semibold text-white">
                    JeevanKumar R
                </h1>
            </div>

            {/* Navigation links at top-right */}
            <div className="absolute top-8 right-28 z-10 flex space-x-8">
                {["Projects", "Blog", "About", "Contact"].map((text) => (
                    <Link
                        key={text}
                        href="/"
                        className="text-xl text-white font-mono"
                    >
                        {text}
                    </Link>
                ))}
            </div>

            {/* Profile photo - centered below background */}
            <div className="absolute top-[180px] left-1/8 transform -translate-x-1/2 z-20 w-[250px] h-[250px] rounded-full border-4 border-black shadow-2xl overflow-hidden">
                <Image
                    src="/backgroundimages/jeevan.jpg"
                    alt="ProfilePhoto"
                    fill
                    className="object-cover"
                />
            </div>
        </div>
    );
}