import { useAnimation, motion } from 'framer-motion';
import { useEffect } from 'react'
import { SiLaravel, SiFigma, SiReact, SiNextdotjs, SiMysql } from 'react-icons/si';
import { useInView } from 'react-intersection-observer';

  const stackItems = [
    {
      id:1,
      name: "Laravel",
      icon: <SiLaravel size={100} />,
      color: "text-cyan-500"
    },
    {
      id:2,
      name: "Figma",
      icon: <SiFigma size={100} />,
      color: "text-cyan-500"
    },
    {
      id:3,
      name: "React",
      icon: <SiReact size={100} />,
      color: "text-cyan-500"
    },
    {
      id:4,
      name: "Next.js",
      icon: <SiNextdotjs size={100} />,
      color: "text-cyan-500"
    },
    {
      id:5,
      name: "MySQL",
      icon: <SiMysql size={100} />,
      color: "text-cyan-500"
    },
  ];
  
  
  const Stack = () => {

    const controls = useAnimation();

    const [ref, inView ] = useInView({
      threshold: 0.1,
    })

    useEffect(() => {
      if(inView){
        controls.start("visible");
      }else{
        controls.start("hidden");
      }
    },[controls, inView])

    return (
      <div className="relative overflow-clip min-h-screen text-white bg-gradient-to-r from-blue-200 to-cyan-200">
        <section className="py-24 md:py-64 max-w-[1200px] mx-auto text-center" id="stack">
          <h2 className="text-7xl text-gray-100 font-bold mb-20"><span className="text-cyan-400">My</span> Stack</h2>
          <div className="flex flex-wrap justify-center gap-8" ref={ref}>
            {stackItems.map((item,index) => (
              <motion.div
                key={item.id}
                custom={index}
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: (index) => ({
                    opacity: 0,
                    y: index % 2 === 0 ? -100 : 100,
                  }),
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 1.5,
                    },
                  },
                }}
                className="bg-white flex flex-col items-center justify-center w-[200px] h-[200px] rounded-xl p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className={`${item.color}`}>{item.icon}</div>
                <p className="text-black text-xl">{item.name}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
  
    )

  };


  

export default Stack