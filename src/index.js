import './styles.css';

class CountdownTimer {
  static days = Math.floor(time / (1000 * 60 * 60 * 24));
  static hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  static mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  static secs = Math.floor((time % (1000 * 60)) / 1000);
  constructor() {
    rootSelector: '#timer-1';
  }
}

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });
