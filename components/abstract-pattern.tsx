"use client";

import { motion } from "framer-motion";

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Example usage with different components */}
      <div className="space-y-8">
        {/* Card with abstract pattern background */}
        <div className="relative overflow-hidden rounded-2xl">
          <AbstractPattern variant="flowing" />
          <div className="relative z-10 p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Flowing Gradient Pattern
            </h2>
            <p className="text-white/90">
              This is an example of how you can use the abstract pattern as a
              background for your components.
            </p>
          </div>
        </div>

        {/* Another card with geometric pattern */}
        <div className="relative overflow-hidden rounded-2xl">
          <AbstractPattern variant="geometric" />
          <div className="relative z-10 p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Geometric Pattern</h2>
            <p className="text-white/90">
              A more structured geometric approach with the same color palette.
            </p>
          </div>
        </div>

        {/* Organic shapes pattern */}
        <div className="relative overflow-hidden rounded-2xl">
          <AbstractPattern variant="organic" />
          <div className="relative z-10 p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Organic Shapes</h2>
            <p className="text-white/90">
              Soft, organic shapes that create a more natural feeling
              background.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface AbstractPatternProps {
  variant?: "flowing" | "geometric" | "organic";
  className?: string;
}

function AbstractPattern({
  variant = "flowing",
  className = "",
}: AbstractPatternProps) {
  const baseClasses = "absolute inset-0 w-full h-full";

  if (variant === "flowing") {
    return (
      <div className={`${baseClasses} ${className}`}>
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E31C79] via-[#C41E3A] to-[#8B1538]" />

        {/* Animated flowing shapes */}
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-r from-[#E31C79]/60 to-[#FF6B9D]/40 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-l from-[#E31C79]/50 to-[#B91C7C]/30 blur-2xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 30, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-gradient-to-tr from-[#FF4081]/40 to-[#E31C79]/20 blur-xl"
          animate={{
            x: [-50, 50, -50],
            y: [-30, 30, -30],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>
    );
  }

  if (variant === "geometric") {
    return (
      <div className={`${baseClasses} ${className}`}>
        {/* Base gradient */}
        <div className="absolute inset-0 bg-white" />

        {/* RD Logo - Main circulating element */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="relative w-32 h-32"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <motion.img
              src="/rd-logo.png"
              alt="RD Logo"
              className="w-full h-full object-contain"
              animate={{
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>

        {/* Smaller RD logos orbiting around */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="relative w-96 h-96"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <motion.img
              src="/rd-logo.png"
              alt="RD Logo"
              className="absolute top-0 left-1/2 w-16 h-16 object-contain -translate-x-1/2 opacity-60"
              animate={{
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
            <motion.img
              src="/rd-logo.png"
              alt="RD Logo"
              className="absolute bottom-0 left-1/2 w-20 h-20 object-contain -translate-x-1/2 opacity-50"
              animate={{
                scale: [1, 0.7, 1],
              }}
              transition={{
                duration: 3.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            <motion.img
              src="/rd-logo.png"
              alt="RD Logo"
              className="absolute left-0 top-1/2 w-14 h-14 object-contain -translate-y-1/2 opacity-70"
              animate={{
                scale: [0.9, 1.4, 0.9],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1.5,
              }}
            />
            <motion.img
              src="/rd-logo.png"
              alt="RD Logo"
              className="absolute right-0 top-1/2 w-18 h-18 object-contain -translate-y-1/2 opacity-40"
              animate={{
                scale: [1.1, 0.6, 1.1],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </motion.div>
        </div>

        {/* Counter-rotating outer ring */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="relative w-[500px] h-[500px]"
            animate={{
              rotate: [360, 0],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <motion.img
              src="/rd-logo.png"
              alt="RD Logo"
              className="absolute top-8 left-1/2 w-12 h-12 object-contain -translate-x-1/2 opacity-30"
              animate={{
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2.8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src="/rd-logo.png"
              alt="RD Logo"
              className="absolute top-1/2 right-8 w-10 h-10 object-contain -translate-y-1/2 opacity-35"
              animate={{
                scale: [0.7, 1.3, 0.7],
              }}
              transition={{
                duration: 3.2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.8,
              }}
            />
            <motion.img
              src="/rd-logo.png"
              alt="RD Logo"
              className="absolute bottom-8 left-1/2 w-14 h-14 object-contain -translate-x-1/2 opacity-25"
              animate={{
                scale: [1, 0.4, 1],
              }}
              transition={{
                duration: 2.2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1.2,
              }}
            />
            <motion.img
              src="/rd-logo.png"
              alt="RD Logo"
              className="absolute top-1/2 left-8 w-16 h-16 object-contain -translate-y-1/2 opacity-45"
              animate={{
                scale: [0.6, 1.1, 0.6],
              }}
              transition={{
                duration: 3.8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1.8,
              }}
            />
          </motion.div>
        </div>

        {/* Floating individual logos with random movement */}
        <motion.img
          src="/rd-logo.png"
          alt="RD Logo"
          className="absolute top-16 right-20 w-8 h-8 object-contain opacity-20"
          animate={{
            scale: [0.8, 1.5, 0.8],
            x: [0, 30, -20, 0],
            y: [0, -15, 25, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.img
          src="/rd-logo.png"
          alt="RD Logo"
          className="absolute bottom-20 left-16 w-10 h-10 object-contain opacity-25"
          animate={{
            scale: [1, 0.5, 1.2, 1],
            x: [0, -40, 20, 0],
            y: [0, 30, -10, 0],
            rotate: [0, -90, -180, -270, -360],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        <motion.img
          src="/rd-logo.png"
          alt="RD Logo"
          className="absolute top-1/3 left-20 w-6 h-6 object-contain opacity-30"
          animate={{
            scale: [0.9, 1.8, 0.9],
            x: [0, 50, -30, 0],
            y: [0, -40, 35, 0],
          }}
          transition={{
            duration: 14,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 5,
          }}
        />
      </div>
    );
  }

  if (variant === "organic") {
    return (
      <div className={`${baseClasses} ${className}`}>
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-bl from-[#E31C79] via-[#B91C7C] to-[#8B1538]" />

        {/* Organic blob shapes */}
        <motion.div
          className="absolute -top-10 -left-10 w-80 h-80 bg-gradient-to-br from-[#FF6B9D]/60 to-[#E31C79]/40 blur-2xl"
          style={{
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          }}
          animate={{
            borderRadius: [
              "60% 40% 30% 70% / 60% 30% 70% 40%",
              "30% 60% 70% 40% / 50% 60% 30% 60%",
              "60% 40% 30% 70% / 60% 30% 70% 40%",
            ],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -bottom-16 -right-16 w-96 h-96 bg-gradient-to-tl from-[#E31C79]/50 to-[#FF4081]/30 blur-3xl"
          style={{
            borderRadius: "40% 60% 60% 40% / 60% 30% 70% 40%",
          }}
          animate={{
            borderRadius: [
              "40% 60% 60% 40% / 60% 30% 70% 40%",
              "60% 40% 40% 60% / 40% 70% 30% 60%",
              "40% 60% 60% 40% / 60% 30% 70% 40%",
            ],
            rotate: [0, -120, -240, -360],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-[#B91C7C]/70 to-[#E31C79]/50 blur-xl"
          style={{
            borderRadius: "70% 30% 50% 50% / 30% 50% 50% 70%",
          }}
          animate={{
            borderRadius: [
              "70% 30% 50% 50% / 30% 50% 50% 70%",
              "50% 50% 30% 70% / 50% 70% 30% 50%",
              "70% 30% 50% 50% / 30% 50% 50% 70%",
            ],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        <motion.div
          className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-gradient-to-bl from-[#FF6B9D]/80 to-[#E31C79]/60 blur-lg"
          style={{
            borderRadius: "50% 50% 80% 20% / 50% 20% 80% 50%",
          }}
          animate={{
            borderRadius: [
              "50% 50% 80% 20% / 50% 20% 80% 50%",
              "80% 20% 50% 50% / 20% 80% 50% 50%",
              "50% 50% 80% 20% / 50% 20% 80% 50%",
            ],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
    );
  }

  return null;
}
