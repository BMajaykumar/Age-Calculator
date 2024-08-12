document.getElementById('dob').addEventListener('change', calculateAge);

        function calculateAge() {
            const dob = new Date(document.getElementById('dob').value);
            const today = new Date();

            const diff = today - dob;
            const ageDate = new Date(diff);

            const years = ageDate.getUTCFullYear() - 1970;
            const months = ageDate.getUTCMonth();
            const days = ageDate.getUTCDate() - 1;
            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor(diff / (1000 * 60));

            document.getElementById('age-years').textContent = years;
            document.getElementById('age-months').textContent = months;
            document.getElementById('age-days').textContent = days;

			document.getElementById('summary-years').textContent = years;
			document.getElementById('summary-months').textContent = years * 12 + months;
			document.getElementById('summary-weeks').textContent = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
			document.getElementById('summary-days').textContent = Math.floor(diff / (1000 * 60 * 60 * 24));
			document.getElementById('summary-hours').textContent = hours;
			document.getElementById('summary-minutes').textContent = minutes;
		
			const nextBirthday = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
			if (today > nextBirthday) {
				nextBirthday.setFullYear(today.getFullYear() + 1);
			}
		
			const nextBirthdayDiff = nextBirthday - today;
			const nextBirthdayDate = new Date(nextBirthdayDiff);
			const nextMonths = nextBirthdayDate.getUTCMonth();
			const nextDays = nextBirthdayDate.getUTCDate() - 1;
		
			const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
			const nextBirthdayDay = daysOfWeek[nextBirthday.getDay()];
		
			document.getElementById('next-birthday-day').textContent = nextBirthdayDay;
			document.getElementById('next-birthday-months').textContent = nextMonths;
			document.getElementById('next-birthday-days').textContent = nextDays;
		}
       
        function clearInputs() {
            document.querySelectorAll('.results p ').forEach(span => span.textContent = '0');
            document.querySelectorAll('.age-summary span ').forEach(span => span.textContent = '0');
            document.getElementById('next-birthday-day').textContent = '-';
        }