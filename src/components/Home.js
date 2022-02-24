import React, { Component } from 'react'
import { Canvas } from '@react-three/fiber'
import { DirectionalLight } from 'three'
import { PerspectiveCamera } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'

export default class Home extends Component {

    constructor(props){
        super(props)
        
        this.state = {
            rotation: 0,
            size: 1
        }

    }

    componentDidMount(){
        setInterval(() => {
            this.update()
        }, 1000/60)
    }

    // called 60fps
    update = () => {
        this.setState({rotation: this.state.rotation + 0.1})
    }

    // called on button click
    onButtonClick = () => {
        console.log('clicked')
        this.setState({size: this.state.size - 0.1})

    }



    pinkCube = (i) => {
        return(
            <mesh
                visible 
                userData={{ hello: 'world' }} 
                position={[0, 0, -10]}
                rotation={[this.state.rotation, 0, this.state.rotation]}
                onClick={this.onButtonClick}
                scale={[this.state.size, this.state.size, this.state.size]}
            >
                <boxGeometry args={[1, 1, 1]}/>
                <meshStandardMaterial transparent color='hotpink' />
            </mesh>
        )
    }


    render() {
        return (
            
            <Canvas style={{ height: '100vh'}}>
                <PerspectiveCamera makeDefault position={[0, 0, 10]}/>
                <pointLight position={[0, 0, 10]} />
                {this.pinkCube()}

            </Canvas>
        )
    }
}
