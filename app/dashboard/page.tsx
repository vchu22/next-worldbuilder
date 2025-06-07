import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardTitle,Button } from "@/components/ui";

const projects = [
    {"project_id": 1234, "title": "Space Travel", "description": "A sci-fi novel about intergalactic travel.", "img_banner": "https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg" },
    {"project_id": 1235, "title": "Magic Kingdoms", "description": "A video game that takes place in a world of magical kingdoms.", "img_banner": "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg" },
    {"project_id": 1236, "title": "Space Travel", "description": "A sci-fi novel about intergalactic travel.", "img_banner": "https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg" },
    {"project_id": 1237, "title": "Magic Kingdoms", "description": "A video game that takes place in a world of magical kingdoms.", "img_banner": "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg" },
    {"project_id": 1238, "title": "Space Travel", "description": "A sci-fi novel about intergalactic travel.", "img_banner": "https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg" },
    {"project_id": 1239, "title": "Magic Kingdoms", "description": "A video game that takes place in a world of magical kingdoms.", "img_banner": "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg" },
]

const Page = () => {
    return (
        <main className="px-5">
            <div className="w-full min-sm:flex min-sm:items-center min-sm:justify-between gap-8 ml-8">
                <h3>Projects</h3>
                <Button className="mr-28">Add Project</Button>
            </div>
            <div className="flex flex-row flex-wrap justify-center p-5">
                {projects.length>0? projects.map((project) => (
                    <Link key={project.project_id} href={`/project/${project.project_id}`} passHref className="mx-2 my-4">
                        <Card className="w-2xs">
                                <Image src={project.img_banner} width={0} height={0} layout="responsive" alt=""/>
                                <CardContent className="flex flex-col gap-2">
                                    <CardTitle>{project.title}</CardTitle>
                                    <CardDescription>{project.description}</CardDescription>
                                </CardContent>
                        </Card>
                    </Link>
                )) : null}
            </div>
        </main>
    )
}

export default Page;