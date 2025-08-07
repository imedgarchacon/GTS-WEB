// Dashboard JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeDashboard();
    setupEventListeners();
});

function initializeDashboard() {
    // Animate stats on load
    animateStats();
    
    // Initialize notifications
    setupNotifications();
    
    // Setup navigation
    setupNavigation();
}

function setupEventListeners() {
    // Navigation items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all items
            document.querySelectorAll('.nav-item').forEach(nav => {
                nav.classList.remove('active');
            });
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Handle navigation (in a real app, this would load different content)
            const section = this.getAttribute('href').substring(1);
            console.log('Navigating to:', section);
        });
    });
    
    // Action cards
    document.querySelectorAll('.action-card').forEach(card => {
        card.addEventListener('click', function() {
            const action = this.querySelector('span').textContent;
            handleAction(action);
        });
    });
    
    // Notification bell
    const notificationBell = document.querySelector('.notification-bell');
    if (notificationBell) {
        notificationBell.addEventListener('click', showNotifications);
    }
    
    // New order button
    const newOrderBtn = document.querySelector('.btn-primary');
    if (newOrderBtn) {
        newOrderBtn.addEventListener('click', () => {
            window.location.href = 'catalog.html';
        });
    }
}

function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const finalValue = stat.textContent;
        const isCurrency = finalValue.includes('€');
        const isNumber = !isNaN(parseFloat(finalValue.replace(/[€,]/g, '')));
        
        if (isNumber) {
            const numericValue = parseFloat(finalValue.replace(/[€,]/g, ''));
            animateNumber(stat, 0, numericValue, isCurrency);
        }
    });
}

function animateNumber(element, start, end, isCurrency = false) {
    const duration = 2000;
    const startTime = performance.now();
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = start + (end - start) * easeOutQuart;
        
        if (isCurrency) {
            element.textContent = `€${currentValue.toFixed(2)}`;
        } else {
            element.textContent = Math.round(currentValue).toLocaleString();
        }
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }
    
    requestAnimationFrame(updateNumber);
}

function setupNotifications() {
    // Simulate real-time notifications
    setInterval(() => {
        const badge = document.querySelector('.notification-badge');
        if (badge) {
            const currentCount = parseInt(badge.textContent);
            if (currentCount < 5) {
                badge.textContent = currentCount + 1;
                badge.style.animation = 'pulse 0.5s ease-in-out';
                setTimeout(() => {
                    badge.style.animation = '';
                }, 500);
            }
        }
    }, 30000); // Check every 30 seconds
}

function setupNavigation() {
    // Add hover effects for navigation
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(8px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
}

function handleAction(action) {
    switch(action) {
        case 'Hacer Pedido':
            window.location.href = 'catalog.html';
            break;
        case 'Usar Voucher':
            showVoucherModal();
            break;
        case 'Invitar Amigos':
            showInviteModal();
            break;
        case 'Favoritos':
            showFavorites();
            break;
        default:
            console.log('Action:', action);
    }
}

function showVoucherModal() {
    // Create modal for vouchers
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Mis Vouchers</h3>
                <button class="close-btn">&times;</button>
            </div>
            <div class="modal-body">
                <div class="voucher-item">
                    <div class="voucher-info">
                        <h4>20% Descuento Orgánicos</h4>
                        <p>Válido hasta: 15/12/2024</p>
                    </div>
                    <button class="btn btn-primary">Usar</button>
                </div>
                <div class="voucher-item">
                    <div class="voucher-info">
                        <h4>€5 Descuento Mínimo €20</h4>
                        <p>Válido hasta: 20/12/2024</p>
                    </div>
                    <button class="btn btn-primary">Usar</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

function showInviteModal() {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Invitar Amigos</h3>
                <button class="close-btn">&times;</button>
            </div>
            <div class="modal-body">
                <p>Comparte tu código de invitación:</p>
                <div class="invite-code">
                    <span>MARIA2024</span>
                    <button class="btn btn-secondary">Copiar</button>
                </div>
                <p>Por cada amigo que se registre, ambos obtendrán 100 GTS Coins.</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    const closeBtn = modal.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

function showFavorites() {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Mis Favoritos</h3>
                <button class="close-btn">&times;</button>
            </div>
            <div class="modal-body">
                <p>No tienes productos favoritos aún.</p>
                <button class="btn btn-primary" onclick="window.location.href='catalog.html'">
                    Explorar Productos
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    const closeBtn = modal.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

function showNotifications() {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Notificaciones</h3>
                <button class="close-btn">&times;</button>
            </div>
            <div class="modal-body">
                <div class="notification-item">
                    <i class="fas fa-gift"></i>
                    <div class="notification-content">
                        <h4>¡Nuevo voucher disponible!</h4>
                        <p>20% descuento en productos orgánicos</p>
                        <span class="notification-time">Hace 5 minutos</span>
                    </div>
                </div>
                <div class="notification-item">
                    <i class="fas fa-coins"></i>
                    <div class="notification-content">
                        <h4>Coins ganados</h4>
                        <p>+25 GTS Coins por tu pedido sostenible</p>
                        <span class="notification-time">Hace 1 hora</span>
                    </div>
                </div>
                <div class="notification-item">
                    <i class="fas fa-shopping-cart"></i>
                    <div class="notification-content">
                        <h4>Pedido entregado</h4>
                        <p>Tu pedido #GTS-2024-001 ha sido entregado</p>
                        <span class="notification-time">Hace 2 horas</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Clear notification badge
    const badge = document.querySelector('.notification-badge');
    if (badge) {
        badge.textContent = '0';
    }
    
    const closeBtn = modal.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// Add some CSS for modals
const style = document.createElement('style');
style.textContent = `
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
    }
    
    .modal-content {
        background: #2d2d2d;
        border-radius: 16px;
        max-width: 500px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
    }
    
    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 24px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .modal-header h3 {
        color: white;
        margin: 0;
    }
    
    .close-btn {
        background: none;
        border: none;
        color: rgba(255, 255, 255, 0.7);
        font-size: 24px;
        cursor: pointer;
        padding: 0;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.3s ease;
    }
    
    .close-btn:hover {
        background: rgba(255, 255, 255, 0.1);
        color: white;
    }
    
    .modal-body {
        padding: 24px;
    }
    
    .voucher-item, .notification-item {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 16px;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 12px;
        margin-bottom: 12px;
    }
    
    .voucher-info h4, .notification-content h4 {
        color: white;
        margin: 0 0 4px 0;
        font-size: 16px;
    }
    
    .voucher-info p, .notification-content p {
        color: rgba(255, 255, 255, 0.7);
        margin: 0 0 4px 0;
        font-size: 14px;
    }
    
    .notification-time {
        color: rgba(255, 255, 255, 0.5);
        font-size: 12px;
    }
    
    .invite-code {
        display: flex;
        align-items: center;
        gap: 12px;
        background: rgba(59, 188, 169, 0.2);
        padding: 16px;
        border-radius: 12px;
        margin: 16px 0;
    }
    
    .invite-code span {
        color: #3bbca9;
        font-weight: 600;
        font-size: 18px;
        letter-spacing: 2px;
    }
`;
document.head.appendChild(style); 