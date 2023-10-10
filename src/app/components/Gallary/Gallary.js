import Image from 'next/image'
import img1 from '../../img/img1.jpg'
import img2 from '../../img/img2.jpg'
import img3 from '../../img/img3.png'
import img4 from '../../img/img4.png'
import img5 from '../../img/img5.png'

const Gallary = () => {
  return (
    <>

   <section class="flex items-center bg-gray-100 font-poppins " id='projects'>
        <div class="container justify-center flex-1 px-4 py-4 mx-auto text-left lg:py-10 ">
            <div class="mx-auto max-w-7xl py-11">
                <h2 class="pb-4 text-4xl font-bold text-center text-gray-800">
                    Our Latest Projects
                </h2>
                <div class="mx-auto mb-16 border-b border-red-700 w-44 dark:border-gray-400"></div>
                <div class="flex flex-wrap self-start gap-5">
                    <div class="w-full lg:w-1/5 md:w-full lg:mb-0">
                        <div class="relative mb-6 overflow-hidden rounded-md shadow-md group">
                            <Image src={img1}
                                class="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500"
                                alt=""/>
                            <div
                                class="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0">
                            </div>
                            <div>
                                <div class="absolute z-10 hidden group-hover:block top-4 right-4">
                                    <a href="#"
                                        class="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16">
                                            <path
                                                d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z">
                                            </path>
                                            <path
                                                d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z">
                                            </path>
                                        </svg>
                                    </a>
                                </div>
                                <div class="absolute z-10 hidden group-hover:block bottom-4 left-4">
                                    <a href=""
                                        class="text-lg font-medium text-white transition duration-500 hover:text-blue-300">
                                        Natural Scenery</a>
                                    <p class="mb-0 text-xs text-gray-300">lorem ipsum</p>
                                </div>
                            </div>
                        </div>
                        <div class="relative overflow-hidden rounded-md shadow-md group">
                            <Image src={img2}
                                class="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500"
                                alt=""/>
                            <div
                                class="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0">
                            </div>
                            <div>
                                <div class="absolute z-10 hidden group-hover:block top-4 right-4">
                                    <a href="#"
                                        class="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16">
                                            <path
                                                d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z">
                                            </path>
                                            <path
                                                d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z">
                                            </path>
                                        </svg>
                                    </a>
                                </div>
                                <div class="absolute z-10 hidden group-hover:block bottom-4 left-4">
                                    <a href=""
                                        class="text-lg font-medium text-white transition duration-500 hover:text-blue-300">
                                        Natural Scenery</a>
                                    <p class="mb-0 text-xs text-gray-300">lorem ipsum</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-full lg:w-1/2 lg:mb-0">
                        <div class="relative overflow-hidden rounded-md shadow-md group">
                            <Image src={img3}
                                class="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[625px] w-full transition duration-500"
                                alt=""/>
                            <div
                                class="absolute inset-0 h-[620px] group-hover:bg-black opacity-50 transition duration-500 z-0">
                            </div>
                            <div>
                                <div class="absolute z-10 hidden group-hover:block top-4 right-4">
                                    <a href="#"
                                        class="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16">
                                            <path
                                                d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z">
                                            </path>
                                            <path
                                                d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z">
                                            </path>
                                        </svg>
                                    </a>
                                </div>
                                <div class="absolute z-10 hidden group-hover:block bottom-4 left-4">
                                    <a href=""
                                        class="text-lg font-medium text-white transition duration-500 hover:text-blue-300">
                                        Natural Scenery</a>
                                    <p class="mb-0 text-xs text-gray-300">lorem ipsum</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full mb-10 lg:w-1/5 md:w-full lg:mb-0">
                        <div class="relative mb-6 overflow-hidden rounded-md shadow-md group">
                            <Image src={img4}
                                class="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500"
                                alt=""/>
                            <div
                                class="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0">
                            </div>
                            <div>
                                <div class="absolute z-10 hidden group-hover:block top-4 right-4">
                                    <a href="#"
                                        class="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16">
                                            <path
                                                d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z">
                                            </path>
                                            <path
                                                d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z">
                                            </path>
                                        </svg>
                                    </a>
                                </div>
                                <div class="absolute z-10 hidden group-hover:block bottom-4 left-4">
                                    <a href=""
                                        class="text-lg font-medium text-white transition duration-500 hover:text-blue-300">
                                        Natural Scenery</a>
                                    <p class="mb-0 text-xs text-gray-300">lorem ipsum</p>
                                </div>
                            </div>
                        </div>
                        <div class="relative mb-6 overflow-hidden rounded-md shadow-md group">
                            <Image src={img5}
                                class="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500"
                                alt=""/>
                            <div
                                class="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0">
                            </div>
                            <div>
                                <div class="absolute z-10 hidden group-hover:block top-4 right-4">
                                    <a href="#"
                                        class="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16">
                                            <path
                                                d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z">
                                            </path>
                                            <path
                                                d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z">
                                            </path>
                                        </svg>
                                    </a>
                                </div>
                                <div class="absolute z-10 hidden group-hover:block bottom-4 left-4">
                                    <a href=""
                                        class="text-lg font-medium text-white transition duration-500 hover:text-blue-300">
                                        Natural Scenery</a>
                                    <p class="mb-0 text-xs text-gray-300">lorem ipsum</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>






    
    </>
  )
}

export default Gallary