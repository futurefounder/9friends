"use client";
import { Button, Modal } from "flowbite-react";
import { useEffect, useState } from "react";

export default function MyModal() {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };
  return (
    <div>
      <Button
        onClick={() => props.setOpenModal("dismissible")}
        className="mr-3 bg-slate-800 hover:bg-fuchsia-900"
      >
        {/* bg-gray-800 rounded-lg hover:bg-fuchsia-700 focus:ring-4 focus:outline-none focus:ring-purple-300 md:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 */}
        Book Now
      </Button>
      <Modal
        dismissible
        show={props.openModal === "dismissible"}
        size="lg"
        onClose={() => props.setOpenModal(undefined)}
        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 opacity-1"
      >
        <Modal.Header className="items-center">
          <span className="m-8 font-semibold">
            {" "}
            Book Your Yoga Experience{" "}
          </span>{" "}
        </Modal.Header>
        <Modal.Body>
          <div className="m-16 mt-8 ml-24 mr-24 space-y-6">
            <p className="text-base leading-relaxed text-center text-gray-500 dark:text-gray-400">
              <button
                type="button"
                className="px-4 py-2 mr-3 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-fuchsia-700 focus:ring-4 focus:outline-none focus:ring-purple-300 md:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                data-cal-link="hi-jesse/9friends-yoga-xberg"
              >
                Book Xberg{" "}
              </button>
            </p>
            <p className="text-base leading-relaxed text-center text-gray-500 dark:text-gray-400">
              <button
                type="button"
                className="px-4 py-2 mr-3 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-fuchsia-700 focus:ring-4 focus:outline-none focus:ring-purple-300 md:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                data-cal-link="hi-jesse/9friends-yoga-fhain"
              >
                Book Fhain{" "}
              </button>
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={() => props.setOpenModal(undefined)}>
                I accept
              </Button> */}
          <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
