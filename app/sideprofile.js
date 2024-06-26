import Image from "next/image";
export default function SideBarProfile() {
    return (
        <div className="flex justify-center my-4">
            <Image
            src = "/portfolio/img/assets/profile.jpg"
            className = "rounded-full border-[12px] border-gray-500"
            width = {200}
            height = {200}
            alt = "Profile picture"
            unoptimized
            ></Image>
        </div>
    );
}