
interface Scheduler {
  scheduleEvent(() => void) : void;
}



class FairScheduler implements Scheduler
{
  constructor() {

  }
}

