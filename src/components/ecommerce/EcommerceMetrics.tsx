"use client";
import React, { useState } from "react";
import Badge from "../ui/badge/Badge";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  BoxIconLine,
  GroupIcon,
} from "@/icons";
import { Dialog } from "@headlessui/react";

// Mock users with names, emails, lat/lng, and fake full addresses
const mockUsers = [
  {
    id: 1,
    name: "Alfie Dyne L. Castro",
    email: "@alfiedyne.castro",
    avatar: "https://i.pravatar.cc/150?img=1",
    address: "123 Example St, City A, Country A",
    lat: 37.77,
    lng: -122.41,
  },
  {
    id: 2,
    name: "Angelo Gloriane",
    email: "@angelo.gloriane.2024",
    avatar: "https://i.pravatar.cc/150?img=2",
    address: "456 Sample Rd, City B, Country B",
    lat: 37.78,
    lng: -122.42,
  },
  {
    id: 3,
    name: "Christian Dave Rey Conde",
    email: "@dave.conde.104",
    avatar: "https://i.pravatar.cc/150?img=3",
    address: "789 Demo Ave, City C, Country C",
    lat: 37.79,
    lng: -122.43,
  },
  {
    id: 4,
    name: "Cio Pao",
    email: "@CioPA014",
    avatar: "https://i.pravatar.cc/150?img=4",
    address: "101 First Blvd, City D, Country D",
    lat: 37.80,
    lng: -122.44,
  },
  {
    id: 5,
    name: "Cristian Gubat",
    email: "@cristian.gubat.75",
    avatar: "https://i.pravatar.cc/150?img=5",
    address: "202 Second St, City E, Country E",
    lat: 37.81,
    lng: -122.45,
  },
  {
    id: 6,
    name: "Frank Xavier Latonero",
    email: "@frankxavier.latonero",
    avatar: "https://i.pravatar.cc/150?img=6",
    address: "303 Third Ave, City F, Country F",
    lat: 37.82,
    lng: -122.46,
  },
  {
    id: 7,
    name: "Giancarlo Tongson",
    email: "@gian.tongson.3",
    avatar: "https://i.pravatar.cc/150?img=7",
    address: "404 Fourth Rd, City G, Country G",
    lat: 37.83,
    lng: -122.47,
  },
  {
    id: 8,
    name: "Gio Giga",
    email: "@gio.giga.2024",
    avatar: "https://i.pravatar.cc/150?img=8",
    address: "505 Fifth Ln, City H, Country H",
    lat: 37.84,
    lng: -122.48,
  },
  {
    id: 9,
    name: "Harry Paolo Patricio",
    email: "@harrypaolo.patricio",
    avatar: "https://i.pravatar.cc/150?img=9",
    address: "606 Sixth St, City I, Country I",
    lat: 37.85,
    lng: -122.49,
  },
  {
    id: 10,
    name: "Lian France Fulgosino",
    email: "@lian.fulgosino",
    avatar: "https://i.pravatar.cc/150?img=10",
    address: "707 Seventh Rd, City J, Country J",
    lat: 37.86,
    lng: -122.50,
  },
];

export const EcommerceMetrics = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
        {/* Users Metric */}
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer rounded-2xl border border-gray-200 bg-white p-5 transition hover:shadow-md dark:border-gray-800 dark:bg-white/[0.03] md:p-6"
        >
          <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
            <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />
          </div>
          <div className="flex items-end justify-between mt-5">
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Users
              </span>
              <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                10
              </h4>
            </div>
            <Badge color="success">
              <ArrowUpIcon />
              11.01%
            </Badge>
          </div>
        </div>

        {/* Orders Metric */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
            <BoxIconLine className="text-gray-800 dark:text-white/90" />
          </div>
          <div className="flex items-end justify-between mt-5">
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Orders
              </span>
              <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                5,359
              </h4>
            </div>
            <Badge color="error">
              <ArrowDownIcon className="text-error-500" />
              9.05%
            </Badge>
          </div>
        </div>
      </div>

      {/* Modal for Users */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto">
          <Dialog.Panel className="max-w-2xl w-full bg-white rounded-2xl p-6 shadow-lg dark:bg-gray-900 max-h-[90vh] overflow-y-auto">
            <Dialog.Title className="text-lg font-bold text-gray-800 dark:text-white">
              User List
            </Dialog.Title>

            <ul className="mt-4 space-y-4">
              {mockUsers.map((user) => (
                <li
                  key={user.id}
                  className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 shadow-sm flex flex-col sm:flex-row gap-4"
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-16 h-16 rounded-full object-cover border border-gray-300"
                  />
                  <div className="flex-1">
                    <p className="text-gray-800 dark:text-white font-medium">
                      {user.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {user.email}
                    </p>
                    <p className="text-sm mt-1 text-gray-500 dark:text-gray-400">
                      {user.address}
                    </p>
                    <iframe
                      title={`Map for ${user.name}`}
                      src={`https://www.google.com/maps?q=${user.lat},${user.lng}&z=14&output=embed`}
                      className="mt-2 w-full max-w-xs rounded-md border border-gray-200"
                      width="100%"
                      height="150"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setIsOpen(false)}
              className="mt-6 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
            >
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};
