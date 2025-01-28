const enrollmentData = {
  enrollmentData: [
    { student: "Alice", course: "Math" },
    { student: "Bob", course: "Math" },
    { student: "Charlie", course: "English" },
    { student: "David", course: "Science" },
    { student: "Eve", course: "Math" },
    { student: "Frank", course: "English" },
  ],
};

// complete this function
async function calculateEnrollment() {
	let sum = 0;
	for(let i = 0; i < enrollmentData.enrollmentData.length; i++){
		if(enrollmentData[i]){
			sum++;
		}
	}
	return sum;
}

calculateEnrollment();
