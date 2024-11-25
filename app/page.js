"use client";
import { useEffect } from "react";
import { Pane } from "tweakpane";
export default function Home() {
  useEffect(() => {
    const pane = new Pane();
    const PARAMS = {
      "min-width": 320,
      "max-width": 1500,
      "fluid-min-size": 12,
      "fluid-max-size": 30,
      "fluid-min-ratio": 1.2,
      "fluid-max-ratio": 1.33,
    };

    pane
      .addBinding(PARAMS, "min-width", {
        label: "Min Width",
        min: 320,
        max: 2000,
        step: 1,
      })
      .on("change", ({ value }) => {
        document.documentElement.style.setProperty("--fluid-min-width", value);
      });
    pane
      .addBinding(PARAMS, "max-width", {
        label: "Max Width",
        min: 320,
        max: 2000,
        step: 1,
      })
      .on("change", ({ value }) => {
        document.documentElement.style.setProperty("--fluid-max-width", value);
      });
    pane
      .addBinding(PARAMS, "fluid-min-size", {
        label: "Fluid Min Size",
        min: 12,
        max: 30,
        step: 1,
      })
      .on("change", ({ value }) => {
        document.documentElement.style.setProperty("--fluid-min-size", value);
      });
    pane
      .addBinding(PARAMS, "fluid-max-size", {
        label: "Fluid Max Size",
        min: 12,
        max: 100,
        step: 1,
      })
      .on("change", ({ value }) => {
        document.documentElement.style.setProperty("--fluid-max-size", value);
      });
    pane
      .addBinding(PARAMS, "fluid-min-ratio", {
        label: "Fluid Min Ratio",
        min: 1.2,
        max: 2,
        step: 1,
      })
      .on("change", ({ value }) => {
        document.documentElement.style.setProperty("--fluid-min-ratio", value);
      });
    pane
      .addBinding(PARAMS, "fluid-max-ratio", {
        label: "Fluid Max Ratio",
        min: 1.2,
        max: 2,
        step: 1,
      })
      .on("change", ({ value }) => {
        document.documentElement.style.setProperty("--fluid-max-ratio", value);
      });
  }, []);
  return (
    <main className="min-h-screen p-8 max-w-6xl mx-auto">
      <h1 className="font-bold mb-8 text-center">Welcome to Our Platform</h1>

      <section className="mb-12">
        <h2 className="font-semibold mb-6">Our Mission</h2>
        <p className="mb-6 leading-relaxed">
          We strive to revolutionize the way people interact with technology.
          Through innovative solutions and cutting-edge development, we&apos;re
          building the future of digital experiences.
        </p>
        <blockquote className="italic border-l-4 border-gray-300 pl-4 my-8">
          &quot;Innovation distinguishes between a leader and a follower.&quot;
        </blockquote>
      </section>

      <section className="mb-12 bg-gray-50 p-6 rounded-lg">
        <h2 className="font-bold mb-6 text-center text-black">Our Vision</h2>
        <p className="mb-6 leading-relaxed text-gray-700">
          To become the world&apos;s leading platform for digital transformation
          and technological innovation, empowering businesses and individuals
          alike.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="font-semibold mb-6">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="feature-card">
            <h3 className="font-medium mb-3">Innovation First</h3>
            <p className=" leading-relaxed">
              Our platform leverages cutting-edge technology to deliver
              unprecedented results and exceptional user experiences.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="font-medium mb-3">User-Centric Design</h3>
            <p className=" leading-relaxed">
              Every feature is crafted with our users in mind, ensuring
              intuitive navigation and seamless interactions.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-semibold mb-6">Our Journey</h2>
        <div className="space-y-6">
          <div className="border-l-2 border-gray-200 pl-4">
            <h3 className="font-bold">2023</h3>
            <p className=" text-gray-600 mb-2">Platform Launch</p>
            <p className="">
              Successfully launched our platform with over 10,000 early
              adopters.
            </p>
          </div>
          <div className="border-l-2 border-gray-200 pl-4">
            <h3 className="font-bold">2024</h3>
            <p className=" text-gray-600 mb-2">Global Expansion</p>
            <p className="">
              Expanded operations to 15 countries with a growing user base.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="font-semibold mb-6">Get in Touch</h2>
        <div className="bg-gray-50 p-6 rounded-lg text-black">
          <p className="mb-4">
            We&apos;re always excited to hear from you! Whether you have a
            question about our services, need technical support, or want to
            explore partnership opportunities, our team is here to help.
          </p>
          <div className=" space-y-2">
            <p className="font-medium">
              Email: <span className="text-blue-600">contact@example.com</span>
            </p>
            <p className="font-medium">
              Phone: <span className="text-blue-600">(555) 123-4567</span>
            </p>
            <p className="font-medium">
              Address:{" "}
              <span className="text-gray-600">
                123 Main Street, City, Country
              </span>
            </p>
          </div>
        </div>
      </section>

      <footer className="text-center mt-12 mb-8">
        <p className="text-gray-500 italic">
          &quot;Technology is best when it brings people together.&quot;
        </p>
      </footer>
    </main>
  );
}
