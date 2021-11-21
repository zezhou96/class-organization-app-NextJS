import Image from "next/image"
import facebook from './facebook.png'
import { ProviderButton } from "components/ui/button"

function FacebookProvider({label, ...props}){
    // auth with Facebook
    return(
        <ProviderButton>
            <Image 
                src={facebook} 
                alt="facebook logo"
                layout="fixed"
                width={24}
                height={24}
            />
            <span>{label || "Sign up with Facebook"}</span>
        </ProviderButton>
    )
}

export default FacebookProvider