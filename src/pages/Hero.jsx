import { motion } from "framer-motion";
//import profilepic from "../assets/images/profilepic.png"


const Hero = () => {
  return (
    <div className="relative overflow-clip min-h-screen text-white bg-gradient-to-r from-blue-200 to-cyan-200">

      <div className="container relative mx-auto px-4 pt-12 pb-24">
        <div className="flex flex-col items-center justify-center text-center z-10">
          <motion.div
          initial={{ opacity:0, scale:0.5}}
          animate={{ opacity:1, scale:1}}
          transition={{ duration: 0.8}}
          className="relative mb-8 mt-24"
          >
            {/*
            <img 
            src={profilepic}
            alt="Jun Er"
            className="w-[250px] relative z-10"
            /> */}

          </motion.div>
          <motion.div
          initial={{ opacity:0, y:20}}
          animate={{ opacity:1, y:0}}
          transition={{ duration: 0.8}}
          className="max-w-2xl"
          >
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-4">
              Hi, I am <br /> Ng <span className="text-cyan-400"> Jun Er </span>
            </h1>
            <p className="text-xl text-black/80 max-w-lg mx-auto leading-relaxed mb-6">
            I am a Junior Software Developer focusing on creating application and webiste that provides user with best experience.
            </p>
            <div className="flex gap-4 justify-center">
              <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-cyan-500 rounded-full font-medium hover:bg-cyan-600 transition-colors"
              >
                Contact Me
              </motion.button>
              <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 border text-black/80 bg-white border-white/20 rounded-full font-medium hover:bg-cyan-600 transition-colors"
              >
                View Works
              </motion.button>
            </div>
          </motion.div>
        </div>
        <motion.div
        animate={{
          y: [0,15,0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-16 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-xl"
        />
      </div>
    </div>
  )
}

export default Hero