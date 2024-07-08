'use client'
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Environment } from "@react-three/drei";

export default function Scene(){
    return (
        <Canvas style = {{backgroundColor: "transparent"}}>
            <Environment preset='city' />
            <Model />
        </Canvas>
    )
}