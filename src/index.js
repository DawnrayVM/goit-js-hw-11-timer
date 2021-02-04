import './styles.css';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.root = document.querySelector(this.selector);
    this.targetDate = new Date(targetDate);
    this.refs = {
      days: this.root.querySelector('span[data-value="days"]'),
      hours: this.root.querySelector('span[data-value="hours"]'),
      mins: this.root.querySelector('span[data-value="mins"]'),
      secs: this.root.querySelector('span[data-value="secs"]'),
    };
  }

  countdownStart() {
    const targetTime = this.targetDate.getTime();
    let intervalID = null;
    intervalID = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = targetTime - currentTime;
      if (deltaTime <= 0) {
        this.countdownStop(intervalID);
        return;
      }
      this.timerUpdate(deltaTime);
    }, 1000);
  }

  timerUpdate(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    this.refs.days.textContent = days;
    this.refs.hours.textContent = hours;
    this.refs.mins.textContent = mins;
    this.refs.secs.textContent = secs;
  }

  pad(value) {
    return String(value).padStart(2, 0);
  }

  countdownStop(ID) {
    clearInterval(ID);
    this.refs.days.textContent = '00';
    this.refs.hours.textContent = '00';
    this.refs.secs.textContent = '00';
    this.refs.mins.textContent = '00';
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: 'Dec 08, 2021',
});
timer.countdownStart();
