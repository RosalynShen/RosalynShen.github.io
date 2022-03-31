// set two timers, one controls the process of pressing, the other controls pressing for longer than 3 sec
        let timerStart = null;
        let timerEnd = null;

        let long = true;
        // long press or click
        let mouse_down_start_time = 0;
        let mouse_up_end_time = 0;

        let icons = document.querySelectorAll('.icon');

        icons.forEach((icon, index) => {
            // add click event
            icon.addEventListener('click', () => {
                if (index == 0) {
                    if (!long) {
                        icon.classList.toggle('light');
                    }
                } else {
                    icon.classList.toggle('light');
                }
            });
        })
       

        // add pressing event
        icons[0].addEventListener('mousedown', () => {

            mouse_down_start_time = new Date().getTime();

            // 0.5s after pressing triggers the timer
            timerStart = setTimeout(() => {
                icons.forEach((icon, index) => {
                    if (index == 0) {
                        icon.classList.add('shake');
                    } 
                });

            }, 500);

            // wait 3.5s for the shaking animation
            timerEnd = setTimeout(() => {

                icons.forEach((icon, index) => {
                    // remove event
                    icon.classList.remove('shake');
                    // add bang and light after shaking
                    icon.classList.add('bang');
                    icon.classList.add("light");
                });
                document.body.style.backgroundImage = "url('post1.png')";

                // another timer for removing the bang animation
                setTimeout(() => {
                    icons.forEach((icon, index) => {
                        icon.classList.remove('bang');
                    });
                }, 1000);
            }, 2000);

        });
        // add event after mouse up
        icons[0].addEventListener('mouseup', () => {
            mouse_up_end_time = new Date().getTime();
            // time difference larger than 300ms is long press
            if (mouse_up_end_time - mouse_down_start_time > 300) {
                long = true;
            } else {
                long = false;
            }

            // load bang
            if (timerStart) {
                clearTimeout(timerStart);
            }
            // remove effects and stop the timer
            if (mouse_up_end_time - mouse_down_start_time < 2000) {
                icons.forEach((icon, index) => {
                    icon.classList.remove('shake');
                });
                if (timerEnd) {
                    clearTimeout(timerEnd);
                    timerEnd = null;
                }
            }
        });
        