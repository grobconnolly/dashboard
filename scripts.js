// Finlete Investor Dashboard — scripts.js

document.addEventListener('DOMContentLoaded', function () {

  // ─── TAB TOGGLE ───────────────────────────────────────────────
  window.showTab = function(tab) {
    const myInv = document.getElementById('myInvestments');
    const opp   = document.getElementById('opportunities');
    const btnMy = document.getElementById('btnMyInvestments');
    const btnOpp = document.getElementById('btnOpportunities');

    if (tab === 'myInvestments') {
      myInv.style.display = 'block';
      opp.style.display   = 'none';
      btnMy.classList.add('active');
      btnOpp.classList.remove('active');
    } else {
      myInv.style.display = 'none';
      opp.style.display   = 'block';
      btnOpp.classList.add('active');
      btnMy.classList.remove('active');
    }
  };

  // ─── PAGE NAVIGATION ──────────────────────────────────────────
  window.showProfile = function() {
    document.getElementById('dashboardPage').style.display = 'none';
    document.getElementById('profilePage').style.display   = 'block';
    window.scrollTo(0, 0);
  };

  window.showDashboard = function() {
    document.getElementById('profilePage').style.display   = 'none';
    document.getElementById('dashboardPage').style.display = 'block';
    window.scrollTo(0, 0);
  };

  // ─── AVATAR UPLOAD ────────────────────────────────────────────
  const avatarInput = document.getElementById('avatarInput');
  if (avatarInput) {
    avatarInput.addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function(ev) {
        const dataUrl = ev.target.result;

        // Update profile page avatar
        const img = document.getElementById('avatarImg');
        const placeholder = document.getElementById('avatarPlaceholder');
        if (img) { img.src = dataUrl; img.style.display = 'block'; }
        if (placeholder) placeholder.style.display = 'none';

        // Update nav circle avatar
        const navAvatar = document.getElementById('avatarDropdown');
        if (navAvatar) {
          navAvatar.innerHTML = '';
          const navImg = document.createElement('img');
          navImg.src = dataUrl;
          navImg.style.cssText = 'width:100%;height:100%;border-radius:50%;object-fit:cover;';
          navAvatar.appendChild(navImg);
        }

        // Store in sessionStorage so it persists while on page
        sessionStorage.setItem('profilePhoto', dataUrl);
      };
      reader.readAsDataURL(file);
    });
  }

  // Restore photo from session if exists
  const savedPhoto = sessionStorage.getItem('profilePhoto');
  if (savedPhoto) {
    const img = document.getElementById('avatarImg');
    const placeholder = document.getElementById('avatarPlaceholder');
    if (img) { img.src = savedPhoto; img.style.display = 'block'; }
    if (placeholder) placeholder.style.display = 'none';
    const navAvatar = document.getElementById('avatarDropdown');
    if (navAvatar) {
      navAvatar.innerHTML = '';
      const navImg = document.createElement('img');
      navImg.src = savedPhoto;
      navImg.style.cssText = 'width:100%;height:100%;border-radius:50%;object-fit:cover;';
      navAvatar.appendChild(navImg);
    }
  }

  // ─── SAME AS BILLING CHECKBOX ─────────────────────────────────
  const sameAsBilling = document.getElementById('sameAsBilling');
  if (sameAsBilling) {
    sameAsBilling.addEventListener('change', function() {
      const shippingFields = document.getElementById('shippingFields');
      if (shippingFields) {
        shippingFields.style.display = this.checked ? 'none' : 'block';
      }
    });
  }

  // ─── SAVE PROFILE ─────────────────────────────────────────────
  window.saveProfile = function() {
    const toast = document.getElementById('savedToast');
    if (toast) {
      toast.style.display = 'block';
      setTimeout(() => { toast.style.display = 'none'; }, 3000);
    }
  };

  // ─── INTERCOM SUPPORT ─────────────────────────────────────────
  window.intercomSettings = {
    app_id: "tfj8vden",
    name: "Riley Nelson",
    email: "rileypnelson@gmail.com",
    created_at: 1716768000
  };

  (function(){
    var w = window;
    var ic = w.Intercom;
    if (typeof ic === "function") {
      ic('reattach_activator');
      ic('update', w.intercomSettings);
    } else {
      var d = document;
      var i = function(){ i.c(arguments); };
      i.q = []; i.c = function(args){ i.q.push(args); };
      w.Intercom = i;
      var l = function(){
        var s = d.createElement('script');
        s.type = 'text/javascript'; s.async = true;
        s.src = 'https://widget.intercom.io/widget/tfj8vden';
        var x = d.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
      };
      if (document.readyState === 'complete') { l(); }
      else if (w.attachEvent) { w.attachEvent('onload', l); }
      else { w.addEventListener('load', l, false); }
    }
  })();

  window.openSupport = function() {
    if (window.Intercom) { Intercom('show'); }
  };

  // ─── PLAYER UPDATE TOGGLE ─────────────────────────────────────
  window.toggleUpdate = function(btn) {
    const body = btn.nextElementSibling;
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !expanded);
    body.classList.toggle('open', !expanded);
  };

  // ─── CARD SCROLL ANIMATIONS ───────────────────────────────────
  const cards = document.querySelectorAll('.athlete-card, .opp-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(16px)';
    card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    observer.observe(card);
  });

});
