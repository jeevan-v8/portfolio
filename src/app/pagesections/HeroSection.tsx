import Image from "next/image";

export default function HeroSection(){
    return(
        <div className="w-full">
            <div className="bg-white relative w-full h-[300px] border-b border-black rounded-b-2xl">
                <Image
                    src="/backgroundimages/milkyway.jpg"
                    alt="BackgroundProfileImage"
                    width={7093}
                    height={2821}
                    className="w-full h-full object-cover border-b border-black rounded-b-2xl"/>
                {/* <Image src="/backgroundimages/milkyway.jpg" alt="BackgroundProfileImage" className="w-full h-full object-cover border-b border-black rounded-b-2xl" /> */}
            </div>
            <div>

            </div>

        </div>
    )
}