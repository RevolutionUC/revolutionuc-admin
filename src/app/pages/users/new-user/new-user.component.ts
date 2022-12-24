import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatLegacyDialogRef as MatDialogRef } from "@angular/material/legacy-dialog";
import { SudoService } from "../../../services/sudo.service";

@Component({
  selector: "app-new-user",
  templateUrl: "./new-user.component.html",
  styleUrls: ["./new-user.component.css"],
})
export class NewUserComponent {
  newUser = new FormGroup({
    username: new FormControl(``, {
      validators: [Validators.required],
    }),
    password: new FormControl(``, {
      validators: [Validators.required],
    }),
    role: new FormControl<"SUDO" | "ADMIN" | "JUDGE" | "HACKER">(`SUDO`),
  });

  isSubmitting = false;

  error = false;

  constructor(
    private service: SudoService,
    public ref: MatDialogRef<NewUserComponent>
  ) {}

  closeDialog() {
    this.ref.close();
  }

  onSubmit() {
    if (this.newUser.valid) {
      this.isSubmitting = true;
      this.error = false;
      this.service.createUser(this.newUser.getRawValue()).subscribe({
        next: () => {
          this.isSubmitting = false;
          this.closeDialog();
        },
        error: (err) => {
          this.isSubmitting = false;
          this.error = true;
        },
      });
    }
  }
}
