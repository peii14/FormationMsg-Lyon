import Frame from './Frame'
import { Disclosure, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import Neuromorphism from './Neuromorphism'
import AnimateHeight from 'react-animate-height'
import { useState } from 'react'
const Dropdown = (props: any) => {
  const [isOpen, setOpen] = useState(false)
  function handleClick() {
    if (isOpen) setOpen(false)
    else setOpen(true)
  }

  {
    if (props.type == 1) {
      return (
        <div className="cursor-pointer">
          <Neuromorphism isMember={props.isDark ? '4' : '3'}>
            <div
              onClick={handleClick}
              className={`flex w-full transform justify-between rounded-lg px-4 py-2 text-left text-sm font-medium 
                ${
                  props.isDark ? 'text-secondary' : 'text-primary'
                }  duration-200`}
            >
              <span className="text-lg font-bold">{props.topic}</span>
              <FontAwesomeIcon
                size="2x"
                className={`duration-500 ${
                  isOpen ? 'rotate-180 transform' : ''
                } h-5 w-5 `}
                icon={faChevronUp}
              />
            </div>
            <AnimateHeight duration={500} height={`${isOpen ? 'auto' : '0'}`}>
              <div className='p-5'>{props.children}</div>
            </AnimateHeight>
          </Neuromorphism>
        </div>
      )
    } else
      return (
        <Disclosure>
          {({ open }) => (
            <>
              <Frame>
                <Disclosure.Button className="flex w-full transform justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-primary  duration-200">
                  <h4 className="text-xl font-semibold">{props.topic}</h4>
                  <FontAwesomeIcon
                    size="2x"
                    className={`duration-500 ${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 `}
                    icon={faChevronUp}
                  />
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter="transition duration-500 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-500 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-500 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="px-4 pt-4 pb-2 ">
                    {props.children}
                  </Disclosure.Panel>
                </Transition>
              </Frame>
            </>
          )}
        </Disclosure>
      )
  }
}

export default Dropdown
