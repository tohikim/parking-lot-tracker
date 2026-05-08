# 🚗 Parking Lot Tracker

A real-time React application designed to manage vehicle entries, track durations, and calculate revenue for a parking facility.

## 🌟 Features

- **Vehicle Entry:** Select a model and color to add a car to the lot.
- **Capacity Control:** Built-in validation prevents adding more than **9 cars** at a time.
- **Live Tracking:** Every parked car displays its specific entry timestamp.
- **Automated Billing:** Upon exit, the app automatically calculates the stay duration in seconds.
- **Revenue Dashboard:** Tracks total daily earnings based on a **$2 per second** rate.
- **Activity Logs:** A detailed history table tracks every car that has left the lot.

## 🛠️ Tech Stack

- **Framework:** React.js
- **Time Utilities:** [date-fns](https://date-fns.org/)
- **Styling:** CSS3 (Component-specific stylesheets)

## 🚀 Installation & Setup

To get this project running locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/tohikim/parking-lot-tracker
    cd parking-lot-tracker
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Ensure `date-fns` is installed:**
    _(This project relies on date-fns for time logic)_

    ```bash
    npm install date-fns
    ```

4.  **Start the development server:**
    ```bash
    npm start
    ```

## 🏗️ Project Structure

- **`App.js`**: The "Source of Truth." It manages the state for `parkedCars`, `exitedCars`, and `totalEarnings`.
- **`Header.js`**: Handles the form input and prevents the lot from exceeding 9 spots.
- **`ParkingLot.js`**: A container that renders the current fleet of cars.
- **`Car.js`**: The core logic unit. When a car "Exits":
  - It calculates the duration using `differenceInSeconds`.
  - It updates the total earnings by multiplying duration by 2.
  - It moves the car data from the active lot to the exit logs.
- **`Footer.js`**: Displays the `Entry` log table and the `Earnings` summary.

---

Developed by **Tohi Kim**
