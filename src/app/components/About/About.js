import Image from "next/image";
import sure1 from "../../img/sure1.jpg";

const About = () => {
  return (
    <>
      <section
        class="flex items-center bg-stone-100 xl:h-screen font-poppins "
        id="aboutus"
      >
        <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div class="flex flex-wrap ">
            <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <div class="relative lg:max-w-md">
                <Image
                  src={sure1}
                  alt="aboutimage"
                  class="relative z-10 object-cover w-full rounded h-96"
                />
                <div class="absolute bottom-0 right-0 z-10 p-8 bg-white border-4 border-blue-500 rounded shadow dark:border-blue-400 lg:-mb-8 lg:-mr-11 sm:p-8 dark:text-gray-300 dark:bg-gray-800 ">
                  <p class="text-lg font-semibold md:w-72">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="absolute top-0 left-0 w-16 h-16 text-blue-700  opacity-10 text-center"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
                    </svg>{" "}
                    Surafell Dejen <br />
                    Founder and Interior Designer
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
              <div class="pl-4 mb-6 border-l-4 border-blue-500 ">
                <span class="text-sm text-gray-600 uppercase dark:text-grey-400">
                  Who we are?
                </span>
                <h1 class="mt-2 text-3xl font-black text-gray-700 md:text-5xl">
                  About Us
                </h1>
              </div>
              <p class="mb-6 text-base leading-7 text-gray-500 ">
                We are the best landscape and Interior designing services.
                <br />
                At the core of our creative endeavors is a dedication to
                designing landscapes and interiors that seamlessly blend modern
                aesthetics with the rich tapestry of Ethiopian culture and
                living styles. Inspired by the vibrant heritage of Ethiopia, our
                passion is evident in every detail of our projects, from
                sweeping landscapes to intimate interiors.
              </p>
              <p class="mb-6 text-base leading-7 text-gray-500">
                We aim to craft spaces that authentically showcase the beauty of
                Ethiopian traditions while providing a modern, comfortable
                living experience. Embracing the challenge of marrying tradition
                with innovation, our designs reflect a harmonious fusion where
                timeless elements coexist with contemporary concepts, creating
                distinctive environments that celebrate both the past and the
                present.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
