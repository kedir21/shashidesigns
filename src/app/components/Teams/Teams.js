import kedir from '../../img/kedir1.jpg'
import beki from '../../img/beki.jpg'
import tsion from '../../img/tsion.png'
import deri from '../../img/deriba.jpg'
import Image from 'next/image'

const Teams = () => {
  return (
    <>


<section class="flex items-center bg-stone-100 xl:h-screen font-poppins dark:bg-gray-800 " id='team'>
        <div class="justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
            <div class="mb-10 text-center">
                <span
                    class="block mb-4 text-xs font-semibold leading-4 tracking-widest text-center text-blue-500 uppercase dark:text-gray-400">
                    Team
                </span>
                <h1 class="text-3xl font-bold capitalize dark:text-white"> Our Perfect Team </h1>
            </div>
            <div class="flex flex-wrap justify-center -mx-4">
                <div class="w-full px-4 mb-10 sm:w-1/2 lg:w-1/3 xl:w-1/4 ">
                    <div class="relative overflow-hidden rounded-md shadow h-96">
                        <div class="w-full overflow-hidden ">
                            <Image class="object-cover w-full h-full transition-all hover:scale-110"
                                src={tsion} alt=""/>
                        </div>
                        <div class="absolute bottom-0 w-full px-4 py-6 text-center bg-gray-800 dark:bg-gray-900 ">
                            <a href="#">
                                <h2 class="mb-1 text-xl font-bold text-gray-200 ">Tsion Mesfin</h2>
                            </a>
                            <div class="pt-1">
                                <div class="text-gray-100">
                                    <div class="inline-block h-3 mr-2 border-l-2 border-red-600"></div>Interior Designer
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full px-4 mb-10 sm:w-1/2 lg:w-1/3 xl:w-1/4 ">
                    <div class="relative overflow-hidden rounded-md shadow h-96">
                        <div class="w-full overflow-hidden ">
                            <Image class="object-cover w-full h-full transition-all hover:scale-110"
                                src={kedir} alt=""/>
                        </div>
                        <div class="absolute bottom-0 w-full px-4 py-6 text-center bg-gray-800 dark:bg-gray-900 ">
                            <a href="#">
                                <h2 class="mb-1 text-xl font-bold text-gray-200 ">Kedir Nasir</h2>
                            </a>
                            <div class="pt-1">
                                <div class="text-gray-100">
                                    <div class="inline-block h-3 mr-2 border-l-2 border-red-600"></div>Civil Engineer
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full px-4 mb-10 sm:w-1/2 lg:w-1/3 xl:w-1/4 ">
                    <div class="relative overflow-hidden rounded-md shadow h-96">
                        <div class="w-full overflow-hidden ">
                            <Image class="object-cover w-full h-full transition-all hover:scale-110"
                                src={beki} alt=""/>
                        </div>
                        <div class="absolute bottom-0 w-full px-4 py-6 text-center bg-gray-800 dark:bg-gray-900 ">
                            <a href="#">
                                <h2 class="mb-1 text-xl font-bold text-gray-200 ">Bereket Zenebe</h2>
                            </a>
                            <div class="pt-1">
                                <div class="text-gray-100">
                                    <div class="inline-block h-3 mr-2 border-l-2 border-red-600"></div>Architect
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full px-4 mb-10 sm:w-1/2 lg:w-1/3 xl:w-1/4 ">
                    <div class="relative overflow-hidden rounded-md shadow h-96">
                        <div class="w-full overflow-hidden ">
                            <Image class="object-cover w-full h-full transition-all hover:scale-110"
                                src={deri} alt=""/>
                        </div>
                        <div class="absolute bottom-0 w-full px-4 py-6 text-center bg-gray-800 dark:bg-gray-900 ">
                            <a href="#">
                                <h2 class="mb-1 text-xl font-bold text-gray-200 ">Driba Demsse</h2>
                            </a>
                            <div class="pt-1">
                                <div class="text-gray-100">
                                    <div class="inline-block h-3 mr-2 border-l-2 border-red-600"></div>Paint and Gypsum Worker
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

export default Teams