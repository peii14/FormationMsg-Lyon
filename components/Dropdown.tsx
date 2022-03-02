import { Disclosure, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Neuromorphism from "./Neuromorphism";
const Dropdown = (props: any) => {
  return (
    <div>
      <Disclosure>
        {({ open }) => (
        //   <Neuromorphism isMember="3">
            <>
              <Disclosure.Button className="flex w-full transform justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-primary  duration-200  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="text-base">{props.topic}</span>
                <FontAwesomeIcon
                  size="1x"
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
                <Disclosure.Panel className="px-4 pt-4 pb-2">
                {props.children}
                </Disclosure.Panel>
              </Transition>
            </>
        //   </Neuromorphism>
        )}
      </Disclosure>
    </div>
  )
}

export default Dropdown
