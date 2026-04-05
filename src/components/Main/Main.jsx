import React from "react";
import style from "./Main.module.scss";
import AddForm from "../AddForm/AddForm";
import { FaRegCalendarPlus } from "react-icons/fa";
import MCalendar from "../MCalendar/MCalendar";
import { Routes, Route } from "react-router";
import WCalendar from "../WCalendar/WCalendar";
import DCalendar from "../DCalendar/DCalendar";
import RegisterPage from "../Auth/RegisterPage";

function Main() {
    const [modalOpen, setModalOpen] = React.useState(false);
    return (
        <main className={style.wrapper}>
            {modalOpen && <AddForm open={setModalOpen} />}
            <button
                className={style.addButton}
                onClick={() => setModalOpen(true)}
            >
                <FaRegCalendarPlus />
            </button>
            <Routes>
                <Route path="/" element={<MCalendar />} />
                <Route path="/week" element={<WCalendar />} />
                <Route path="/day" element={<DCalendar />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </main>
    );
}

Main.propTypes = {};

export default Main;
