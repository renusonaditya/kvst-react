import React from "react";
import "./Menu.css";

import { menu } from "./config/menu";

export const Menu = () => {
  return (
    <div id="templatemo_menu_panel">
      <div id="templatemo_menu_section">
        <ul>
          <li>
            <a href="index.html" class="current">
              Home
            </a>
          </li>

          {/* {menu &&
            menu.length &&
            menu.map((eachItem, itemIndex) => {
              const { label, options } = eachItem;
              return (
                <li class="about-menu">
                  <label class="about-menu-label">{label}</label>
                  <div class="sub-menu-1">
                    <ul>
                      {options &&
                        options.length &&
                        options.map((eachOption) => {
                          const { label } = eachOption;
                          return (
                            <li>
                              <a href="./index_page1-Copy.html">{label}</a>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </li>
              );
            })} */}
          <li class="about-menu">
            <label class="about-menu-label">About</label>
            <div class="sub-menu-1">
              <ul>
                <li>
                  <a href="./index_page1-Copy.html">History</a>
                </li>
                <li>
                  <a href="#">About Temple</a>
                </li>
                <li>
                  <a href="#">General Information</a>
                </li>
              </ul>
            </div>
          </li>

          <li class="rituals-menu">
            <label class="rituals-menu-label">Rituals</label>
            <div class="sub-menu-2">
              <ul>
                <li>
                  <a href="#">Nitya Puja</a>
                </li>
                <li>
                  <a href="#">Homas</a>
                </li>
                <li>
                  <a href="#">Special Pujas</a>
                </li>
              </ul>
            </div>
          </li>

          <li class="trust-menu">
            <label class="trust-menu-label">Trust</label>
            <div class="sub-menu-3">
              <ul>
                <li>
                  <a href="#">About Trust</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">Financial Data</a>
                </li>
                <li>
                  <a href="#">Employee Details</a>
                </li>
              </ul>
            </div>
          </li>

          <li class="donation-menu">
            <label class="donation-menu-label">Donation</label>
            <div class="sub-menu-4">
              <ul>
                <li>
                  <a href="#">Hundi</a>
                </li>
                <li>
                  <a href="#">Online Payment</a>
                </li>
              </ul>
            </div>
          </li>

          <li class="contact-menu">
            <label class="contact-menu-label">Contact</label>
            <div class="sub-menu-5">
              <ul>
                <li>
                  <a href="#">Help Desk</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">How to reach</a>
                </li>
              </ul>
            </div>
          </li>

          <li class="accounts-menu">
            <label class="accounts-menu-label">Accounts</label>
            <div class="sub-menu-6">
              <ul>
                <li>
                  <a href="#">Hundi</a>
                </li>
                <li>
                  <a href="#">Income</a>
                </li>
                <li>
                  <a href="#">Expenses</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">Online Services</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
