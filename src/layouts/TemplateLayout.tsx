import { useParams, useNavigate } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { templates } from "../templates";
import { ChevronDownIcon } from "lucide-react";

const TemplateLayout = () => {
  const { themeId } = useParams();
  const navigate = useNavigate();

  const selected = templates.find(t => t.id === themeId);
  const Template = selected?.component;

  if (!Template) return <div className="text-black p-10">Template not found</div>;

  return (
    <div className="min-h-screen bg-[#0c0f0a]">

      {/* 🔹 Header */}
      <div className="sticky top-0 z-50 bg-[#0c0f0a]/90 backdrop-blur border-b border-gray-800">
        <div className="mx-auto px-4 py-4 flex items-center justify-between">

          {/* Left - Back */}
          <button
            onClick={() => navigate("/builder/theme")}
            className="text-[#d2ff2f] hover:text-[#b8e62a] transition"
          >
            ← Back
          </button>

          {/* Center - Title */}
          <h2 className="text-[#d2ff2f] font-semibold text-lg text-center">
            {selected.name}
          </h2>

          {/* Right - Export */}
          <Menu as="div" className="relative inline-block">
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#d2ff2f] px-3 py-2 text-sm font-semibold text-gray-800 inset-ring-1 inset-ring-[#d2ff2f]/5 hover:bg-[#d2ff2f]/90">
              Export
              <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-800" />
            </MenuButton>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-[#d2ff2f]/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-md text-[#d2ff2f] data-focus:bg-[#d2ff2f]/5 data-focus:text-[#d2ff2f] data-focus:outline-hidden"
                  >
                    Export in React
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-md text-[#d2ff2f] data-focus:bg-[#d2ff2f]/5 data-focus:text-[#d2ff2f] data-focus:outline-hidden"
                  >
                    Export in HTML5
                  </a>
                </MenuItem>
                {/* <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-[#d2ff2f]/5 data-focus:text-[#d2ff2f] data-focus:outline-hidden"
                  >
                    License
                  </a>
                </MenuItem>
                <form action="#" method="POST">
                  <MenuItem>
                    <button
                      type="submit"
                      className="block w-full px-4 py-2 text-left text-sm text-gray-300 data-focus:bg-[#d2ff2f]/5 data-focus:text-[#d2ff2f] data-focus:outline-hidden"
                    >
                      Sign out
                    </button>
                  </MenuItem>
                </form> */}
              </div>
            </MenuItems>
          </Menu>

        </div>
      </div>

      {/* 🔹 Template Content */}
      <div className="py-10">
        <div className="mx-auto px-4">
          <Template />
        </div>
      </div>

    </div>
  );
};

export default TemplateLayout;