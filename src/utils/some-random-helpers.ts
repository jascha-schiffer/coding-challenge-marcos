/**
 * this file contains nonsense helpers we are using to mimic a larger/slower application than this minimal react app actually is
 */

export const wasteCycles = (duration: number): void => {
  const startTime = Date.now()

  while (startTime + duration >= Date.now()) {
    // blocking some time
  }
}
