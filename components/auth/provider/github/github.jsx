import Image from "next/image"
import github from './github.png'
import { ProviderButton } from "components/ui/button"

function GithubProvider({label, ...props}){
    // auth with Github
    return(
        <ProviderButton>
            <Image 
                src={github} 
                alt="github logo"
                layout="fixed"
                width={24}
                height={24}
            />
            <span>{label || "Sign up with Github"}</span>
        </ProviderButton>
    )
}

export default GithubProvider