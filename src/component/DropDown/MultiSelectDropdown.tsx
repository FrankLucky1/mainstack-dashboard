import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface MultiSelectDropdownProps {
  options: string[];
  placeholder?: string;
  onChange: (selected: string[]) => void;
  value?: string[];
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
  options,
  placeholder = "Select options",
  onChange,
  value = []
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>(value);
  const dropdownRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    setSelected((prev) => {
      const newSelected = prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option];

      onChange(newSelected); // ✅ trigger here, not in useEffect
      return newSelected;
    });
  };

  const displayText = selected.length > 0 ? selected.join(", ") : placeholder;

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="rounded-xl px-3 py-2 flex justify-between items-center h-12 cursor-pointer bg-[#EFF1F6] w-full"
      >
        <span
          className={`truncate ${
            selected.length === 0 ? "text-[#131316]/60" : "text-[#131316]"
          } w-full font-medium`}
        >
          {displayText}
        </span>
        <ChevronDown
          color="#31373D"
          className={`w-4! h-4! transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute mt-2 bg-white border border-gray-200 shadow-lg rounded-lg z-20 max-h-80 overflow-y-auto w-full"
          >
            {options.map((option, index) => (
              <label
                key={index}
                className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer h-12"
              >
                <input
                  type="checkbox"
                  checked={selected.includes(option)}
                  onChange={() => handleSelect(option)}
                  className="mr-2 accent-black h-5 w-5"
                />
                <span className="text-gray-800 capitalize">{option}</span>
              </label>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MultiSelectDropdown;

