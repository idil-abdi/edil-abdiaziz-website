import { Stack } from "react-bootstrap"
import { Project } from "./Project"

export const Projects = () => {
    return(
        <div>
            <h2 className="text-center">Projects</h2>
            <Stack gap={2} direction="horizontal" className="flex-wrap">
                <Project/>
                <Project/>
                <Project/>
                <Project/>
            </Stack>
        </div>
        
    )
}