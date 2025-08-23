// Professional typing animation
const typingElement = document.getElementById('typing');
const phrases = [
  "empower communities",
  "solve real-world problems", 
  "drive digital transformation",
  "create innovative solutions",
  "build scalable applications"
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeAnimation() {
  const currentPhrase = phrases[phraseIndex];
  
  if (isDeleting) {
    typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
  } else {
    typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 100;
  }

  if (!isDeleting && charIndex === currentPhrase.length) {
    setTimeout(() => isDeleting = true, 2000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
  }

  setTimeout(typeAnimation, typingSpeed);
}

// Professional reactor control
const reactorBackground = document.querySelector('.reactor-background');
let isReactorActive = false;
let cpuSimulationIntervals = [];

// CPU Simulation Data
const instructions = [
  'LOAD RAX, [0x7FFAB2C0]', 'STORE RBX, [0x12345678]', 'ADD RCX, RAX, RBX', 'SUB RDX, RCX, RAX',
  'MUL RSI, RBX, #8', 'DIV RDI, RSI, RCX', 'CMP RAX, RBX', 'JMP 0x00401000',
  'MOV RAX, #0xDEADBEEF', 'AND RBX, RAX, #0x0F', 'OR RCX, RBX, #0xF0', 'XOR RDX, RCX, RAX',
  'SHL RSI, RDX, #2', 'SHR RDI, RSI, #1', 'CALL 0x00403000', 'RET',
  'PUSH RAX', 'POP RBX', 'NOP', 'HALT'
];

const aluOperations = ['ADD', 'SUB', 'MUL', 'DIV', 'AND', 'OR', 'XOR', 'SHL', 'SHR', 'CMP'];
const fpuCalculations = [
  'π × e²', 'sin(π/4)', 'cos(π/3)', 'tan(π/6)', 
  'log₂(1024)', 'e^2.5', 'sqrt(256)', '2^10', 'π/180', 'ln(e)'
];

// Memory and Register Values
let memoryState = {
  addresses: [0x1000, 0x1008, 0x1010, 0x1018, 0x1020, 0x1028],
  currentAddress: 0x1000,
  data: ['0xFEEDFACE', '0xBEEFF00D', '0xDEADBEEF', '0xCAFEBABE', '0xDEADC0DE', '0xFACEF00D']
};

let registerState = {
  RAX: 0x7FFAB2C0, 
  RBX: 0x12345678, 
  RCX: 0xDEADBEEF, 
  RDX: 0xCAFEBABE, 
  RSP: 0x7FFC8420, 
  RIP: 0x00401000
};

let systemState = {
  cpuTemp: 68,
  clockSpeed: 3.2,
  cacheHitRate: 94,
  memoryUsage: 76,
  powerLevel: 98
};

function activateReactor() {
  if (!isReactorActive) {
    isReactorActive = true;
    reactorBackground.classList.add('active');
    console.log('🔋 Arc Reactor Activated - Systems Online');
    
    // Start CPU simulation with delay for dramatic effect
    setTimeout(() => {
      startCPUSimulation();
      startSystemMonitoring();
    }, 1500);
  }
}

function deactivateReactor() {
  if (isReactorActive) {
    isReactorActive = false;
    reactorBackground.classList.remove('active');
    console.log('🔋 Arc Reactor Deactivated - Systems Shutting Down');
    
    // Stop all CPU simulations
    stopCPUSimulation();
    stopSystemMonitoring();
  }
}

// Professional scroll handling
let lastScrollY = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  
  // Navbar scroll effect
  if (currentScrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Reactor activation
  if (currentScrollY > 200) {
    activateReactor();
  } else if (currentScrollY < 100) {
    deactivateReactor();
  }

  lastScrollY = currentScrollY;
});

// CPU Simulation Functions
function startCPUSimulation() {
  // CPU Fetch-Decode-Execute Cycle (2 second cycle)
  const fetchDecodeExecute = setInterval(() => {
    if (!isReactorActive) return;
    simulateCPUCycle();
  }, 2000);
  cpuSimulationIntervals.push(fetchDecodeExecute);

  // ALU Operations (2.5 second intervals)
  const aluOperationsInterval = setInterval(() => {
    if (!isReactorActive) return;
    updateALUOperation();
  }, 2500);
  cpuSimulationIntervals.push(aluOperationsInterval);

  // Register Updates (3 second intervals)
  const registerUpdates = setInterval(() => {
    if (!isReactorActive) return;
    updateRegisters();
  }, 3000);
  cpuSimulationIntervals.push(registerUpdates);

  // Memory Operations (3.5 second intervals)
  const memoryOperations = setInterval(() => {
    if (!isReactorActive) return;
    updateMemorySystem();
  }, 3500);
  cpuSimulationIntervals.push(memoryOperations);

  // FPU Operations (4 second intervals)
  const fpuOps = setInterval(() => {
    if (!isReactorActive) return;
    updateFPU();
  }, 4000);
  cpuSimulationIntervals.push(fpuOps);
}

function stopCPUSimulation() {
  cpuSimulationIntervals.forEach(interval => clearInterval(interval));
  cpuSimulationIntervals = [];
}

// Simulate realistic CPU fetch-decode-execute cycle
function simulateCPUCycle() {
  const signals = document.querySelectorAll('.signal');
  if (!signals.length) return;

  // Fetch Phase (Cyan highlight)
  signals[0].style.background = 'rgba(0, 212, 255, 0.4)';
  signals[0].style.color = '#00D4FF';
  signals[0].style.transform = 'scale(1.05)';
  
  setTimeout(() => {
    signals[0].style.background = 'rgba(0, 200, 81, 0.15)';
    signals[0].style.color = '#00C851';
    signals[0].style.transform = 'scale(1)';
    
    // Decode Phase
    signals[1].style.background = 'rgba(0, 212, 255, 0.4)';
    signals[1].style.color = '#00D4FF';
    signals[1].style.transform = 'scale(1.05)';
  }, 500);

  setTimeout(() => {
    signals[1].style.background = 'rgba(0, 200, 81, 0.15)';
    signals[1].style.color = '#00C851';
    signals[1].style.transform = 'scale(1)';
    
    // Execute Phase
    signals[2].style.background = 'rgba(0, 212, 255, 0.4)';
    signals[2].style.color = '#00D4FF';
    signals[2].style.transform = 'scale(1.05)';
  }, 1000);

  setTimeout(() => {
    signals[2].style.background = 'rgba(0, 200, 81, 0.15)';
    signals[2].style.color = '#00C851';
    signals[2].style.transform = 'scale(1)';
    
    // Writeback Phase
    if (signals[3]) {
      signals[3].style.background = 'rgba(0, 212, 255, 0.4)';
      signals[3].style.color = '#00D4FF';
      signals[3].style.transform = 'scale(1.05)';
    }
  }, 1500);

  setTimeout(() => {
    if (signals[3]) {
      signals[3].style.background = 'rgba(0, 200, 81, 0.15)';
      signals[3].style.color = '#00C851';
      signals[3].style.transform = 'scale(1)';
    }
  }, 2000);
}

// Update ALU with realistic operations
function updateALUOperation() {
  const operation = document.querySelector('.operation');
  const calculation = document.querySelector('.calculation');
  const flags = document.querySelectorAll('.flag');
  
  if (!operation || !calculation) return;

  const randomOp = aluOperations[Math.floor(Math.random() * aluOperations.length)];
  const valueA = Math.floor(Math.random() * 256);
  const valueB = Math.floor(Math.random() * 256);
  let result = 0;
  
  operation.textContent = randomOp;
  
  switch(randomOp) {
    case 'ADD':
      result = valueA + valueB;
      calculation.textContent = `0x${valueA.toString(16).toUpperCase().padStart(2, '0')} + 0x${valueB.toString(16).toUpperCase().padStart(2, '0')} = 0x${result.toString(16).toUpperCase()}`;
      break;
    case 'SUB':
      result = Math.max(0, valueA - valueB);
      calculation.textContent = `0x${valueA.toString(16).toUpperCase().padStart(2, '0')} - 0x${valueB.toString(16).toUpperCase().padStart(2, '0')} = 0x${result.toString(16).toUpperCase()}`;
      break;
    case 'AND':
      result = valueA & valueB;
      calculation.textContent = `0x${valueA.toString(16).toUpperCase().padStart(2, '0')} & 0x${valueB.toString(16).toUpperCase().padStart(2, '0')} = 0x${result.toString(16).toUpperCase()}`;
      break;
    case 'OR':
      result = valueA | valueB;
      calculation.textContent = `0x${valueA.toString(16).toUpperCase().padStart(2, '0')} | 0x${valueB.toString(16).toUpperCase().padStart(2, '0')} = 0x${result.toString(16).toUpperCase()}`;
      break;
    case 'XOR':
      result = valueA ^ valueB;
      calculation.textContent = `0x${valueA.toString(16).toUpperCase().padStart(2, '0')} ^ 0x${valueB.toString(16).toUpperCase().padStart(2, '0')} = 0x${result.toString(16).toUpperCase()}`;
      break;
    default:
      calculation.textContent = `0x${valueA.toString(16).toUpperCase().padStart(2, '0')} ${randomOp} 0x${valueB.toString(16).toUpperCase().padStart(2, '0')}`;
  }
  
  // Update flags realistically
  if (flags.length >= 3) {
    // Zero flag
    flags[0].style.background = result === 0 ? 'rgba(0, 212, 255, 0.3)' : 'rgba(26, 27, 30, 0.8)';
    flags[0].style.color = result === 0 ? '#00D4FF' : '#0066CC';
    
    // Carry flag
    flags[1].style.background = result > 255 ? 'rgba(0, 212, 255, 0.3)' : 'rgba(26, 27, 30, 0.8)';
    flags[1].style.color = result > 255 ? '#00D4FF' : '#0066CC';
    
    // Overflow flag
    flags[2].style.background = Math.random() < 0.1 ? 'rgba(0, 212, 255, 0.3)' : 'rgba(26, 27, 30, 0.8)';
    flags[2].style.color = Math.random() < 0.1 ? '#00D4FF' : '#0066CC';
  }
}

// Update Register File with realistic values
function updateRegisters() {
  const registerElements = document.querySelectorAll('.reg-val');
  
  if (!registerElements.length) return;
  
  // Generate realistic register updates
  Object.keys(registerState).forEach((reg, index) => {
    if (index < registerElements.length) {
      // Simulate realistic register changes
      if (Math.random() < 0.7) { // 70% chance of update
        if (reg === 'RIP') {
          registerState[reg] += 8; // 64-bit instruction pointer increments by 8
          if (registerState[reg] > 0x00404000) registerState[reg] = 0x00401000;
        } else if (reg === 'RSP') {
          registerState[reg] += Math.random() < 0.5 ? -8 : 8; // Stack pointer changes
          if (registerState[reg] < 0x7FFC8000) registerState[reg] = 0x7FFC8420;
          if (registerState[reg] > 0x7FFC8420) registerState[reg] = 0x7FFC8000;
        } else {
          // Random value changes for general-purpose registers
          const change = Math.floor(Math.random() * 0x1000) - 0x800;
          registerState[reg] = Math.max(0, registerState[reg] + change);
          if (registerState[reg] > 0xFFFFFFFF) registerState[reg] = Math.floor(Math.random() * 0xFFFFFFFF);
        }
        
        const hexValue = `0x${registerState[reg].toString(16).toUpperCase().padStart(8, '0')}`;
        registerElements[index].textContent = hexValue;
        
        // Visual feedback for updated register
        registerElements[index].style.color = '#00D4FF';
        registerElements[index].style.transform = 'scale(1.05)';
        
        setTimeout(() => {
          registerElements[index].style.color = '#00D4FF';
          registerElements[index].style.transform = 'scale(1)';
        }, 400);
      }
    }
  });
}

// Update Memory System
function updateMemorySystem() {
  const memCells = document.querySelectorAll('.mem-cell');
  const cachedData = document.querySelectorAll('.cached-data');
  const memoryStats = document.querySelectorAll('.stat');
  
  if (!memCells.length) return;
  
  // Clear all active states
  memCells.forEach(cell => cell.classList.remove('active'));
  
  // Activate random memory cell
  const activeIndex = Math.floor(Math.random() * memCells.length);
  memCells[activeIndex].classList.add('active');
  
  // Update memory addresses
  memoryState.currentAddress += 8; // 64-bit addressing
  if (memoryState.currentAddress > 0x1030) memoryState.currentAddress = 0x1000;
  
  memCells.forEach((cell, index) => {
    const address = 0x1000 + (index * 8);
    cell.textContent = `0x${address.toString(16).toUpperCase()}`;
  });
  
  // Update cached data
  if (cachedData.length >= 2) {
    cachedData[0].textContent = memoryState.data[Math.floor(Math.random() * memoryState.data.length)];
    cachedData[1].textContent = memoryState.data[Math.floor(Math.random() * memoryState.data.length)];
  }
  
  // Update memory usage statistics
  systemState.memoryUsage += Math.random() < 0.5 ? -3 : 3;
  systemState.memoryUsage = Math.max(50, Math.min(95, systemState.memoryUsage));
  
  if (memoryStats.length >= 2) {
    memoryStats[0].textContent = `Used: ${systemState.memoryUsage}%`;
    memoryStats[1].textContent = `Free: ${100 - systemState.memoryUsage}%`;
  }
}

// Update Floating Point Unit
function updateFPU() {
  const floatCalc = document.querySelector('.float-calc');
  const floatResult = document.querySelector('.float-result');
  
  if (!floatCalc || !floatResult) return;
  
  const randomCalc = fpuCalculations[Math.floor(Math.random() * fpuCalculations.length)];
  floatCalc.textContent = randomCalc;
  
  // Generate realistic floating point results
  const results = ['= 23.1407', '= 0.70711', '= 0.86603', '= 0.57735', '= 10.0', '= 12.1825', '= 16.0', '= 1024', '= 0.01745', '= 1.0'];
  const randomResult = results[Math.floor(Math.random() * results.length)];
  floatResult.textContent = randomResult;
}

// System Monitoring
function startSystemMonitoring() {
  const systemMonitor = setInterval(() => {
    if (!isReactorActive) return;
    
    updateCPUTemperature();
    updateCacheStats();
  }, 4000);
  
  cpuSimulationIntervals.push(systemMonitor);
}

function stopSystemMonitoring() {
  // Already handled by stopping all intervals
}

function updateCPUTemperature() {
  const tempElement = document.querySelector('.cpu-temperature');
  
  if (tempElement) {
    systemState.cpuTemp += (Math.random() - 0.5) * 6;
    systemState.cpuTemp = Math.max(45, Math.min(85, systemState.cpuTemp));
    
    tempElement.textContent = `${Math.round(systemState.cpuTemp)}°C`;
    
    // Color coding based on temperature
    if (systemState.cpuTemp > 75) {
      tempElement.style.color = '#FF4444';
    } else if (systemState.cpuTemp > 65) {
      tempElement.style.color = '#FFB800';
    } else {
      tempElement.style.color = '#00C851';
    }
  }
}

function updateCacheStats() {
  const hitRate = document.querySelector('.hit-rate');
  const missRate = document.querySelector('.miss-rate');
  
  if (hitRate && missRate) {
    systemState.cacheHitRate += (Math.random() - 0.5) * 4;
    systemState.cacheHitRate = Math.max(85, Math.min(98, systemState.cacheHitRate));
    
    hitRate.textContent = `Hit: ${Math.round(systemState.cacheHitRate)}%`;
    missRate.textContent = `Miss: ${Math.round(100 - systemState.cacheHitRate)}%`;
  }
}

// Professional fade-in observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// Professional contact form
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const submitBtn = e.target.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;
  
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  submitBtn.disabled = true;
  
  emailjs.sendForm('service_1dw1clq', 'template_z6fjipl', this)
    .then(() => {
      submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
      submitBtn.style.background = '#00C851';
      this.reset();
      
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = '';
        submitBtn.disabled = false;
      }, 3000);
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      submitBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Error Occurred';
      submitBtn.style.background = '#FF4444';
      
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = '';
        submitBtn.disabled = false;
      }, 3000);
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Enhanced Core Activity Animation
function enhanceCoreActivity() {
  const cores = document.querySelectorAll('.core');
  
  setInterval(() => {
    if (!isReactorActive) return;
    
    cores.forEach((core, index) => {
      if (Math.random() < 0.8) { // 80% activity rate for professional look
        core.style.transform = 'scale(1.1)';
        core.style.boxShadow = '0 6px 20px rgba(0, 212, 255, 0.6)';
        
        setTimeout(() => {
          core.style.transform = 'scale(1)';
          core.style.boxShadow = '0 4px 12px rgba(0, 212, 255, 0.4)';
        }, 600);
      }
    });
  }, 1500);
}

// Particle System Enhancement
function enhanceParticleSystem() {
  const particles = document.querySelectorAll('.particle');
  
  setInterval(() => {
    if (!isReactorActive) return;
    
    particles.forEach(particle => {
      // Professional color variations
      const colors = ['#00D4FF', '#0066CC', '#FFB800'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
      particle.style.background = randomColor;
      particle.style.boxShadow = `0 0 12px ${randomColor}`;
      
      // Subtle size variations
      const size = 5 + Math.random() * 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
    });
  }, 3000);
}

// Initialize all systems
document.addEventListener("DOMContentLoaded", function () {
  console.log('🚀 Professional Arc Reactor Portfolio Initializing...');
  
  // Start typing animation
  setTimeout(typeAnimation, 1000);
  
  // Initialize enhancements
  enhanceCoreActivity();
  enhanceParticleSystem();
  
  // Initial system state
  console.log('⚡ CPU Architecture Loaded');
  console.log('🔬 Quantum Processors Ready');
  console.log('📡 Data Buses Initialized');
  console.log('💾 Memory Systems Online');
  console.log('🎯 Scroll down to activate Arc Reactor...');
  
  // Professional debug commands
  window.reactor = {
    activate: () => activateReactor(),
    deactivate: () => deactivateReactor(),
    status: () => console.log(`Reactor Active: ${isReactorActive}`),
    cpu: () => console.log('CPU State:', systemState),
    memory: () => console.log('Memory State:', memoryState),
    registers: () => console.log('Register State:', registerState),
    simulate: () => {
      console.log('🔬 Running CPU Simulation...');
      simulateCPUCycle();
      updateALUOperation();
      updateRegisters();
      updateMemorySystem();
      updateFPU();
    }
  };
  
  console.log('🎮 Professional Debug Commands Available:');
  console.log('  reactor.activate() - Activate the reactor');
  console.log('  reactor.deactivate() - Deactivate the reactor'); 
  console.log('  reactor.status() - Check reactor status');
  console.log('  reactor.simulate() - Run CPU simulation manually');
});

// Professional Error Handling
window.addEventListener('error', function(e) {
  console.error('🚨 Application Error:', e.error);
});

// Professional Performance Monitoring
if ('performance' in window) {
  window.addEventListener('load', function() {
    setTimeout(() => {
      const perfData = performance.timing;
      const loadTime = perfData.loadEventEnd - perfData.navigationStart;
      console.log(`⚡ Page loaded in ${loadTime}ms`);
    }, 0);
  });
}
