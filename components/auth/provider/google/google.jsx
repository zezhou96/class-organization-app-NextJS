import Image from "next/image"
import google from './google.png'
import { ProviderButton } from "components/ui/button"

function GoogleProvider({label, ...props}){
    // auth with Google
    return(
        <ProviderButton>
            <Image 
                src={google} 
                alt="google logo"
                layout="fixed"
                width={24}
                height={24}
            />
            <span>{label || "Sign up with Google"}</span>
        </ProviderButton>
    )
}

export default GoogleProvider