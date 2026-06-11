import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent {

  ownerWhatsapp = '919617015154';

  formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  onSubmit(): void {
    const whatsappMessage = `
📩 NEW ENQUIRY

Name: ${this.formData.name}
Email: ${this.formData.email}
Phone: ${this.formData.phone}

Message:
${this.formData.message}
    `.trim();

    const whatsappUrl = 
      `https://wa.me/${this.ownerWhatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank');

    alert('✅ WhatsApp opened successfully!');

    // Reset the form
    this.formData = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  }
}