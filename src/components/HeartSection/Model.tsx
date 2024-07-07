'use client'
import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react"
import { Mesh } from "three"

export default function Model(){

    const mesh = useRef<Mesh>(null)
    const { nodes  } = useGLTF("/finalheart.glb")
    const { viewport } = useThree()

    const materialProps = {
        thickness: 1.55,
        roughness:  0,
        transmission: 1, 
        ior: 1.2, 
        chromaticAberration: 0.02,
        backside: true,

    }

    console.log(materialProps)

    useFrame(() => {
        if (mesh.current){
            mesh.current.rotation.x += 0.01
            mesh.current.rotation.y += 0.01
        }
    })

    return(
        <group scale={1}>
            <Text position={[0, 0, -1]} fontSize={3} color="white" anchorX="center" anchorY="middle">
                DKC
            </Text>
            <mesh ref={mesh} {...nodes.Cube}>
                <MeshTransmissionMaterial {...materialProps} />
            </mesh>
        </group>
    )
}

