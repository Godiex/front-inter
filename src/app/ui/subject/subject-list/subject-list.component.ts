import { Component, OnInit } from "@angular/core";
import { User } from "@core/models/student/student.model";
import { StudentService } from "@core/services/user-service.interface";
import { MatDialog } from "@angular/material/dialog";
import { FtxDialogComponent } from "../../shared/components/ftx-dialog/ftx-dialog.component";

@Component({
  selector: "app-list-student-by-subject",
  templateUrl: "./list-student-by-subject.component.html",
  styleUrl: "./list-student-by-subject.component.css",
})
export class SubjectListComponent implements OnInit {
  filter: string = "";
  dataSearch: string = "";
  totalItems = 50;
  itemsPerPage = 5;
  currentPage = 0;
  pageSizeOptions = [5, 10, 15];
  users: User[] = [];

  constructor(
    private userService: StudentService,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.fetchUsers(this.currentPage, this.itemsPerPage, this.dataSearch);
  }
  public fetchUsers(
    pageNumber: number,
    pageSize: number,
    filter?: string
  ): void {
    this.userService
      .getAll(pageNumber, pageSize, filter)
      .subscribe((result) => {
        this.users = result.data;
        this.totalItems = result.totalCount;
        this.itemsPerPage = result.pageSize;
      });
  }
  public showModalDelete(element: User): void {
    const dialogResult = this.dialog.open(FtxDialogComponent, {
      data: { content: "¿Desea eliminar este usuario?" },
    });

    dialogResult.afterClosed().subscribe((result) => {
      if (result) {
        this.userService.delete(element.id).subscribe(() => {
          this.fetchUsers(this.currentPage, this.itemsPerPage, this.dataSearch);
        });
      }
    });
  }

  onPageChange(event: any) {
    this.currentPage = event.pageIndex;
    this.itemsPerPage = event.pageSize;
    this.fetchUsers(this.currentPage + 1, this.itemsPerPage, this.dataSearch);
  }

  getTypeUserSpanish(role: string): string {
    switch (role) {
      case 'AdministratorCustomer':
        return 'Administrador Compañia';
      case 'AuxiliarCustomer':
        return 'Auxiliar';
      default:
        return 'Desconocido';
    }
  }

}
