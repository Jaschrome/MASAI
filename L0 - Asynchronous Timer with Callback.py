import time

def timer(duration_ms, on_complete):
    time.sleep(duration_ms / 1000)
    on_complete(f"Timer of {duration_ms} ms finished")

def done(message):
    print(message)

# Example
timer(2000, done)
