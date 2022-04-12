import Frame from './Frame'
import { Disclosure, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import Neuromorphism from './Neuromorphism'
const Dropdown = (props: any) => {
  {
    if (props.type == 1) {
      return (
        <Disclosure>
          {({ open }) => (
            <>
              <Neuromorphism isMember={props.isDark ? '4' : '3'}>
                <Disclosure.Button
                  className={`flex w-full transform justify-between rounded-lg px-4 py-2 text-left text-sm font-medium 
                  ${
                    props.isDark ? 'text-secondary' : 'text-primary'
                  }  duration-200`}
                >
                  <span className="text-lg font-bold">{props.topic}</span>
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
                  <Disclosure.Panel
                    className={`px-4 pt-4 pb-2 ${
                      props.isDark ? 'text-secondary' : 'text-primary'
                    }`}
                  >
                    {props.children}
                  </Disclosure.Panel>
                </Transition>
              </Neuromorphism>
            </>
          )}
        </Disclosure>
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
