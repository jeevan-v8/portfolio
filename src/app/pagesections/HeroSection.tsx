import Image from "next/image";

export default function HeroSection(){
    return(
        <div className="w-full">
            <div className="bg-white relative w-full h-[300px] shadow-2xl shadow-gray-950  rounded-b-2xl">
                <Image
                    src="/backgroundimages/mountain.jpg"
                    alt="BackgroundProfileImage"
                    width={7093}
                    height={2821}
                    className="w-full h-full object-cover object-[100%_50%]  rounded-b-2xl"/>
                {/* <Image src="/backgroundimages/milkyway.jpg" alt="BackgroundProfileImage" className="w-full h-full object-cover border-b border-black rounded-b-2xl" /> */}
                <div className=" absolute pt-[250px] pl-[80px] shadow-2xl mt-[50px] inset-0 flex justify-center items-center w-[250px] h-[250px] rounded-full ">
                    <Image 
                        src="/backgroundimages/jeevan.jpg"
                        width={250}
                        height={250}
                        alt="ProfilePhoto"
                        className="w-full h-full object-cover absolute shadow-2xl shadow-gray-950  border-black border-4 rounded-full "/>
                </div>
            </div>
            <div className=" ml-[600px] mt-[50px] flex mr-[350px]  justify-center  border-white border">
                <h1 className=" text-white">hi there ! I am Jeevan </h1>
            </div>
        </div>
    )
}