import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    &:hover img{
        transform: rotate(20deg);
    }
`

const Logo = () => {
    const zioLogoImg = `/images/zrdv${useColorModeValue('-dark', '')}.jpg`
    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={zioLogoImg} width={26} height={26} alt="" />
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily='M PLUS Rounded 1c'
                        fontWeight={"bold"}
                        ml={3}
                    >
                        Scheva Pratama
                    </Text>
                </LogoBox>
            </a>
        </Link>
    );
}

export default Logo